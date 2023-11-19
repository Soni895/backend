const express = require("express");
const router = express.Router();
const {GetLogs}= require("../controller/GetLogs");
const { CreateLogs } = require("../controller/Createlogs");
const { DeleteLog } = require("../controller/Delete");


router.get("/getlogs",GetLogs);
router.post("/CreateLog",CreateLogs);
router.delete("/deletelog",DeleteLog);

module.exports = router;
