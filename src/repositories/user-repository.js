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
}

module.exports = UserRepository;
