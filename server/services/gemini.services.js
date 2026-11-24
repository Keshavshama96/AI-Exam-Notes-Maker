
const PRIMARY_MODEL = "gemini-3.5-flash-lite";
const FALLBACK_MODEL = "gemini-3.8-flash";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const RETRYABLE_STATUS_CODES = [429, 500, 502, 503, 504];

const generateWithModel = async (model, prompt, maxAttempts = 3) => {
  const Gemini_URL = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`;

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      const response = await fetch(Gemini_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": process.env.GEMINI_API_KEY
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: prompt }]
            }
          ]
        })
      });

      if (!response.ok) {
        const errorText = await response.text();
        const error = new Error(
          `Gemini API Error (${response.status}): ${errorText}`
        );

        error.retryable = RETRYABLE_STATUS_CODES.includes(response.status);

        if (!error.retryable || attempt === maxAttempts) {
          throw error;
        }

        console.log(
          `${model} failed with ${response.status}. Retry ${attempt}/${maxAttempts}`
        );

        await sleep(2000 * attempt);
        continue;
      }

      return await response.json();

    } catch (error) {
      if (error.retryable === false) {
        throw error;
      }

      // Network errors and retryable API errors
      if (attempt === maxAttempts) {
        error.retryable = true;
        throw error;
      }

      console.log(
        `${model} request failed. Retrying ${attempt}/${maxAttempts}:`,
        error.message
      );

      await sleep(2000 * attempt);
    }
  }
};

export const generateGeminiResponse = async (prompt) => {
  try {
    let data;

    // Try primary model first
    try {
      console.log(`Trying primary model: ${PRIMARY_MODEL}`);

      data = await generateWithModel(PRIMARY_MODEL, prompt, 3);

    } catch (primaryError) {
      // Don't use fallback for authentication, permission,
      // invalid request or other non-temporary errors.
      if (!primaryError.retryable) {
        throw primaryError;
      }

      console.warn(
        `Primary model failed. Switching to fallback: ${FALLBACK_MODEL}`
      );

      // Try fallback model
      data = await generateWithModel(FALLBACK_MODEL, prompt, 2);
    }

    const text = data.candidates?.[0]?.content?.parts
      ?.map((part) => part.text || "")
      .join("");

    if (!text) {
      throw new Error("No text returned from Gemini");
    }

    const cleanText = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    return JSON.parse(cleanText);

  } catch (error) {
    console.error("Gemini Fetch Error:", error.message);
    throw new Error("Gemini API fetch failed");
  }
};
