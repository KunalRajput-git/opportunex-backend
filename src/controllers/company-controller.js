const { CompanyService } = require("../services/index");

const companyService = new CompanyService();

const get = async (req, res) => {
  try {
    const { userId, pageno, type } = req.query;
    const token = req.token;
    const companies = await companyService.filter(userId, token, type, pageno);
    return res.status(200).json({
      data: companies,
      success: true,
      message: "Successfully fetched companies",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      error: {
        ...error,
        message: error.message,
      },
    });
  }
};

module.exports = { get };
