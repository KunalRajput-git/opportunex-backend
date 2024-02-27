const UserService = require("./user-service");
const { CompanyRepository } = require("../repositories/index");
const { PAGE_SIZE } = require("../constants");

class CompanyService {
  constructor() {
    this.companyRepository = new CompanyRepository();
    this.userService = new UserService();
  }

  async filter(userId, token, type, pageno) {
    try {
      if (token) {
        this.userService.verifyToken(token);
      }
      const offset = (pageno - 1) * PAGE_SIZE;
      switch (type) {
        case "all":
          if (token && userId) {
            return await this.companyRepository.getAllExludingWatchlist(
              userId,
              offset,
              PAGE_SIZE
            );
          } else {
            return await this.companyRepository.getAllComapnies(
              offset,
              PAGE_SIZE
            );
          }
        case "my watchlist":
          if (userId) {
            return await this.companyRepository.getWatchlistCompanies(
              userId,
              offset,
              PAGE_SIZE
            );
          }
          break;
        default:
          if (userId) {
            return await this.companyRepository.filterByTypeExludingWatchlist(
              userId,
              type,
              offset,
              PAGE_SIZE
            );
          }
          break;
      }
    } catch (error) {
      console.log("something went wrong inside company-service:", error);
      throw error;
    }
  }

  async getSearchedCompany(userId, search) {
    try {
      const companies = this.companyRepository.search(userId, search);
      return companies;
    } catch (error) {
      console.log("something went wrong inside company-service:", error);
      throw error;
    }
  }
}

module.exports = CompanyService;
