const { User } = require("../models/index");

class UserRepository {
  async save(user) {
    try {
      const newUser = new User(user);
      await newUser.save();
    } catch (error) {
      console.log("something went wrong inside User-repository:", error);
      throw error;
    }
  }
  async getByEmail(email) {
    try {
      const user = await User.findOne({ email: email }).select(
        "-updatedAt -__v -lastLogin"
      );
      return user;
    } catch (error) {
      console.log("Something went wrong inside user-repository layer");
      throw error;
    }
  }
  async updatelastLogin(email, date) {
    try {
      await User.updateOne({ email: email }, { lastLoginAt: date });
      return true;
    } catch (error) {
      console.log("Something went wrong inside user-repository layer");
      throw error;
    }
  }
  async addToWatchlist(userId, companyId) {
    try {
      await User.findByIdAndUpdate(userId, {
        $addToSet: { watchlist: companyId },
      });
      return true;
    } catch (error) {
      console.log("Something went wrong inside user-repository layer");
      throw error;
    }
  }
}

module.exports = UserRepository;
