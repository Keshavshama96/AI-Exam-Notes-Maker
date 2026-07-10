import jwt from "jsonwebtoken";

// Middleware to protect private routes
const isAuth = async (req, res, next) => {
  try {

    // Read JWT token from browser cookies
    let { token } = req.cookies;

    // If token is not present, user is not logged in
    if (!token) {
      return res.status(400).json({
        message: "Token is not found",
      });
    }

    // Verify JWT using secret key
    let verifyToken = jwt.verify(token, process.env.JWT_SECRET);

    // If token verification fails
    if (!verifyToken) {
      return res.status(400).json({
        message: "User doesn't have a valid token",
      });
    }

    // Store logged-in user's ID in request object
    req.userId = verifyToken.userId;

    // Pass request to the next middleware/controller
    next();

  } catch (error) {

    // Handle unexpected errors
    return res.status(500).json({
      message: `isAuth Error: ${error}`,
    });

  }
};

export default isAuth;