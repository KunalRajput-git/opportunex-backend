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

const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userService.get(email, password);
    return res.status(200).json({
      success: true,
      data: user,
      message: "successfully fetched user!",
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: { ...error, message: error.message },
    });
  }
};

const addToWatchlist = async (req, res) => {
  const { userId, companyId } = req.body;
  try {
    await userService.addCompanyToWatchlist(userId, companyId);
    return res.status(201).json({
      success: true,
      message: "successfully added!",
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: { ...error, message: error.message },
    });
  }
};

module.exports = { signup, signin, addToWatchlist };
