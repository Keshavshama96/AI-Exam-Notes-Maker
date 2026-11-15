const Gemini_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent"

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const generateGeminiResponse = async (prompt) => {
  try {
    let response;

    for (let attempt = 1; attempt <= 3; attempt++) {
      response = await fetch(Gemini_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": process.env.GEMINI_API_KEY
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: prompt
                }
              ]
            }
          ]
        })
      });

      // 503 = Google busy, dobara try karo
      if (response.status !== 503) break;
      if (attempt < 3) await sleep(2000 * attempt);
    }

    if (!response.ok) {
      const err = await response.text();
      throw new Error(err);
    }

    const data = await response.json();

    const text = data.candidates?.[0]?.content?.parts?.[0]?.text;

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
