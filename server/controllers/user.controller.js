import UserModel from "../models/user.model.js";

// Get the currently logged-in user's details
export const getCurrentUser = async (req, res) => {
  try {
    // Get userId from the authentication middleware
    const userId = req.userId;

    // Find user in the database
    const user = await UserModel.findById(userId);

    // If user does not exist
    if (!user) {
      return res.status(404).json({
        message: "Current User is not found",
      });
    }

    // Send user details
    return res.status(200).json(user);

  } catch (error) {
    // Handle unexpected errors
    return res.status(500).json({
      message: `getCurrentUser error ${error}`,
    });
  }
};

export const addCredits = async (req, res) => {
  try {
    const user = await UserModel.findById(req.userId)
    if(!user) return res.status(400).json({message: "User not found"})
    
    user.credits += 500
    await user.save()
    
    res.status(200).json({message: "Credits added", credits: user.credits})
  } catch(error) {
    console.log(error)
    res.status(500).json({message: "Error adding credits"})
  }
}