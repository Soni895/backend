const express = require("express");
const router = express.Router();
const {GetLogs}= require("../controller/GetLogs");
const { CreateLogs } = require("../controller/Createlogs");


router.get("/getlogs",GetLogs);
router.post("/CreateLog",CreateLogs);

module.exports = router;
