const { application } = require("express");
const { Application } = require("../models/index");

class ApplicationRepository {
  async create(application) {
    try {
      const newApplication = new Application(application);
      await newApplication.save();
      return newApplication;
    } catch (error) {
      console.log("Something went wrong inside application-repository:", error);
      throw error;
    }
  }

  async getAll(userId) {
    try {
      const applications = await Application.find({ userId });
      return applications;
    } catch (error) {
      console.log("Something went wrong inside application-repository:", error);
      throw error;
    }
  }

  async update(userId, applicationId, application) {
    try {
      const result = await Application.updateOne(
        { _id: applicationId, userId },
        { $set: application }
      );

      if (result.nModified === 0) {
        throw new Error("Application not found or not updated");
      }
    } catch (error) {
      console.log("Something went wrong inside application-repository:", error);
      throw error;
    }
  }

  async delete(userId, applicationId) {
    try {
      await Application.deleteOne({ userId: userId, _id: applicationId });
    } catch (error) {
      console.log("Something went wrong inside application-repository:", error);
      throw error;
    }
  }
}

module.exports = ApplicationRepository;
