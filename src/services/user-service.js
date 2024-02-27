const { UserRepository } = require("../repositories");
const bcrypt = require("bcrypt");
const { AuthenticationError } = require("../utils/errors");
const jwt = require("jsonwebtoken");
const { JWT_KEY } = require("../config/serverConfig");
const { JWT_EXPIRATION_TIME } = require("../constants");

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

  async get(email, plainPassword) {
    try {
      const user = (await this.userRepository.getByEmail(email)).toObject();
      if (user) {
        const isPasswordMatched = await this.checkPassword(
          plainPassword,
          user.password
        );
        if (!isPasswordMatched)
          throw new AuthenticationError("incorrect password!");
        const jwtToken = this.createToken({ email: user.email, id: user.id });
        user.token = jwtToken;
        delete user.password;
        await this.userRepository.updatelastLogin(email, new Date());
        return user;
      } else throw new AuthenticationError("email not exist!");
    } catch (error) {
      console.log(error.message);
      console.log("Something went wrong inside user-service layer");
      throw error;
    }
  }

  async addCompanyToWatchlist(userId, companyId) {
    try {
      await this.userRepository.addToWatchlist(userId, companyId);
    } catch (error) {
      console.log("something went wrong inside User-service:", error);
      throw error;
    }
  }
  async checkPassword(plainPassword, ecnryptedPassword) {
    return bcrypt.compareSync(plainPassword, ecnryptedPassword);
  }

  createToken(user) {
    try {
      const result = jwt.sign(user, JWT_KEY, {
        expiresIn: JWT_EXPIRATION_TIME,
      });
      return result;
    } catch (error) {
      console.log("Something went wrong while creating token.");
      throw error;
    }
  }
  verifyToken(token) {
    try {
      const result = jwt.verify(token, JWT_KEY);
      return result;
    } catch (error) {
      console.log("Something went wrong while validating token.");
      throw new AuthenticationError(error.message);
    }
  }
}

module.exports = UserService;
