const { CompanyService } = require("../services/index");

const companyService = new CompanyService();

const getPage = async (req, res) => {
  try {
    const pageNumber = req.params.pageNo;
    const token = req.token;
    const companies = await companyService.page(pageNumber, token);
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

module.exports = { getPage };
