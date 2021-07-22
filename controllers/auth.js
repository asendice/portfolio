const Project = require("../models/Projects");
const Tech = require("../models/Tech");
const AboutMe = require("../models/AboutMe");

// get and return all projects
exports.getProjects = (req, res) => {
  Project.find().then((proj) => {
    if (!proj) {
      return res.status(404).json({
        errors: [{ user: "Projects cannot be found" }],
      });
    } else {
      return res.status(200).json({
        success: true,
        message: proj,
      });
    }
  });
};
//get and return all skills 
exports.getTech = (req, res) => {
  Tech.find().then((tech) => {
    if (!tech) {
      return res.status(404).json({
        errors: [{ user: "Tech cannot be found" }],
      });
    } else {
      return res.status(200).json({
        success: true,
        message: tech,
      });
    }
  });
};

//get and return about me
exports.getAboutMe = (req, res) => {
  AboutMe.find().then((txt) => {
    if (!txt) {
      return res.status(404).json({
        errors: [{ user: "AboutMe cannot be found" }],
      });
    } else {
      return res.status(200).json({
        success: true,
        message: txt,
      });
    }
  });
};