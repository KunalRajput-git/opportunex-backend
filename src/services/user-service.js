const { User } = require("../models/index");
const { UserRepository } = require("../repositories");

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }
  async create(user) {
    try {
      await this.userRepository.save(user);
    } catch (error) {
      console.log("something went wrong inside User-service:", error);
      throw error;
    }
  }
}

module.exports = UserService;
