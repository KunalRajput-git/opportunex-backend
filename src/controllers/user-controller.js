const { UserService } = require("../services/index");

const userService = new UserService();

const signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    await userService.create({
      name,
      email,
      password,
    });
    return res.status(201).json({
      success: true,
      message: "User signed up successfully!",
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: { ...error, message: error.message },
    });
  }
};

module.exports = { signup };
