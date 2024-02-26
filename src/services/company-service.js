const UserService = require("./user-service");
const { CompanyRepository } = require("../repositories/index");
const { PAGE_SIZE } = require("../constants");

class CompanyService {
  constructor() {
    this.companyRepository = new CompanyRepository();
    this.userService = new UserService();
  }

  async filterBy(token, type, pageno) {
    try {
      if (token) {
        this.userService.verifyToken(token);
      }
      const offset = (pageno - 1) * PAGE_SIZE;
      const companies = await this.companyRepository.filter(
        type,
        offset,
        PAGE_SIZE
      );
      return companies;
    } catch (error) {
      console.log("something went wrong inside service-repository");
      throw error;
    }
  }
}

module.exports = CompanyService;
