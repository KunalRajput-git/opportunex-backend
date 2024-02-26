const UserService = require("./user-service");
const { CompanyRepository } = require("../repositories/index");
const { PAGE_SIZE } = require("../constants");

class CompanyService {
  constructor() {
    this.companyRepository = new CompanyRepository();
    this.userService = new UserService();
  }

  async page(pageNumber, token) {
    try {
      if (token) {
        this.userService.verifyToken(token);
      }
      const offset = (pageNumber - 1) * PAGE_SIZE;
      const companies = await this.companyRepository.getPage(offset, PAGE_SIZE);
      return companies;
    } catch (error) {
      console.log("something went wrong inside service-repository");
      throw error;
    }
  }
}

module.exports = CompanyService;
