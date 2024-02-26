const { Company } = require("../models/index");

class CompanyRepository {
  async getAll(offset, pageSize) {
    try {
      const companies = await Company.find({}).skip(offset).limit(pageSize);
      const totalCompaniesCount = await Company.countDocuments({});
      return { companies, totalCompaniesCount };
    } catch (error) {
      console.log("Something went wrong inside company-repository:", error);
      throw error;
    }
  }

  async filter(type, offset, pageSize) {
    try {
      if (type == "all") return this.getAll(offset, pageSize);
      else {
        const companies = await Company.find({ type: type })
          .skip(offset)
          .limit(pageSize);
        const totalCompaniesCount = await Company.countDocuments({
          type: type,
        });
        return { companies, totalCompaniesCount };
      }
    } catch (error) {
      console.log("Something went wrong inside company-repository:", error);
      throw error;
    }
  }
}

module.exports = CompanyRepository;
