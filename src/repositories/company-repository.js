const { Company, User } = require("../models/index");

class CompanyRepository {
  async getAllComapnies(offset, pageSize) {
    try {
      const companies = await Company.find({}).skip(offset).limit(pageSize);
      const totalCompaniesCount = await Company.countDocuments({});
      return { companies, totalCompaniesCount };
    } catch (error) {
      console.log("Something went wrong inside company-repository:", error);
      throw error;
    }
  }

  async getAllExludingWatchlist(userId, offset, pageSize) {
    try {
      const userWatchlist = await this.getUserWatchlist(userId);
      const companies = await Company.find({ _id: { $nin: userWatchlist } })
        .skip(offset)
        .limit(pageSize);
      const totalCompaniesCount = await Company.countDocuments({
        _id: { $nin: userWatchlist },
      });

      return { companies, totalCompaniesCount };
    } catch (error) {
      console.log("Something went wrong inside company-repository:", error);
      throw error;
    }
  }

  async filterByTypeExludingWatchlist(userId, type, offset, pageSize) {
    try {
      const userWatchlist = await this.getUserWatchlist(userId);
      const companies = await Company.find({
        type: type,
        _id: { $nin: userWatchlist },
      })
        .skip(offset)
        .limit(pageSize);
      const totalCompaniesCount = await Company.countDocuments({
        type: type,
        _id: { $nin: userWatchlist },
      });
      return { companies, totalCompaniesCount };
    } catch (error) {
      console.log("Something went wrong inside company-repository:", error);
      throw error;
    }
  }

  async getWatchlistCompanies(userId, offset, pageSize) {
    try {
      const userWatchlist = await this.getUserWatchlist(userId);
      console.log(userWatchlist);
      const companies = await Company.find({ _id: { $in: userWatchlist } })
        .skip(offset)
        .limit(pageSize);
      const totalCompaniesCount = await Company.countDocuments({
        _id: { $in: userWatchlist },
      });
      return { companies, totalCompaniesCount };
    } catch (error) {
      console.log("Something went wrong inside company-repository:", error);
      throw error;
    }
  }

  async getUserWatchlist(userId) {
    try {
      const user = await User.findById(userId, "watchlist");
      if (user && user.watchlist) {
        return user.watchlist;
      } else return [];
    } catch (error) {
      console.log("Something went wrong inside company-repository:", error);
      throw error;
    }
  }
}

module.exports = CompanyRepository;
