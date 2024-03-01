const { ApplicationService } = require("../services/index");

const applicationService = new ApplicationService();

const createApplication = async (req, res) => {
  try {
    const userId = req.params.userId;
    const application = { userId, ...req.body.application };
    const data = await applicationService.createApplication(application);
    return res.status(201).json({
      success: true,
      data: data,
      message: "Application created successfully",
      error: null,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: {
        message: error.message,
      },
    });
  }
};

const getAll = async (req, res) => {
  try {
    const userId = req.params.userId;
    const userApplications = await applicationService.getAllApplications(
      userId
    );
    return res.status(200).json({
      success: true,
      data: userApplications,
      message: "Applications fetched successfully",
      error: null,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: {
        message: error.message,
      },
    });
  }
};

const updateApplication = async (req, res) => {
  try {
    const { userId, applicationId } = req.params;
    const application = req.body.application;
    await applicationService.updateApplication(
      userId,
      applicationId,
      application
    );
    return res.status(200).json({
      success: true,
      message: "Application updated successfully",
      error: null,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: {
        message: error.message,
      },
    });
  }
};

const deleteApplication = async (req, res) => {
  try {
    const { userId, applicationId } = req.params;
    await applicationService.deleteApplication(userId, applicationId);
    return res.status(200).json({
      success: true,
      message: "Application deleted successfully",
      error: null,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: {
        message: error.message,
      },
    });
  }
};

module.exports = {
  createApplication,
  getAll,
  updateApplication,
  deleteApplication,
};
