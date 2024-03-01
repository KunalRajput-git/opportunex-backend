const { ApplicationRepository } = require("../repositories/index");

class ApplicationService {
  constructor() {
    this.applicationRepository = new ApplicationRepository();
  }
  async createApplication(application) {
    try {
      const newApplication = await this.applicationRepository.create(
        application
      );
      return newApplication;
    } catch (error) {
      console.log("something went wrong inside Application-service:", error);
      throw error;
    }
  }
  async getAllApplications(userId) {
    try {
      const userApplications = await this.applicationRepository.getAll(userId);
      return userApplications;
    } catch (error) {
      console.log("something went wrong inside Application-service:", error);
      throw error;
    }
  }

  async updateApplication(userId, applicationId, application) {
    try {
      await this.applicationRepository.update(
        userId,
        applicationId,
        application
      );
    } catch (error) {
      console.log("something went wrong inside Application-service:", error);
      throw error;
    }
  }

  async deleteApplication(userId, applicationId) {
    try {
      await this.applicationRepository.delete(userId, applicationId);
    } catch (error) {
      console.log("something went wrong inside Application-service:", error);
      throw error;
    }
  }
}

module.exports = ApplicationService;
