const { Company } = require("../models/index");

class CompanyRepository {
  async getPage(offset, pageSize) {
    try {
      const companies = await Company.find({}).skip(offset).limit(pageSize);
      const totalCompaniesCount = await Company.countDocuments({});
      return { companies, totalCompaniesCount };
    } catch (error) {
      console.log("Something went wrong inside company-repository:", error);
      throw error;
    }
  }
}

module.exports = CompanyRepository;
