const express = require("express");

const router = express.Router();

const {
  getAllJobs,
  getSingleJobs,
  createJob,
  editJob,
  deleteJob,
} = require("../controllers/jobs");

router.route("/").post(createJob).get(getAllJobs);
router.route("/:id").get(getSingleJobs).delete(deleteJob).patch(editJob);

module.exports = router;
