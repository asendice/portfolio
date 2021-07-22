const express = require("express");
const router = express.Router();

const { getProjects, getTech, getAboutMe } = require("../controllers/auth");

router.get("/projects", getProjects);
router.get("/tech", getTech);
router.get("/aboutme", getAboutMe);


module.exports = router;