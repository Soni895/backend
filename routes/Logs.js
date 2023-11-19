const express = require("express");
const router = express.Router();
const {GetLogs, GetAllLogs}= require("../controller/GetLogs");
const { CreateLogs } = require("../controller/Createlogs");
const { DeleteLog } = require("../controller/Delete");


router.get("/getlogs",GetLogs);
router.post("/CreateLogs",CreateLogs);
router.delete("/deletelog",DeleteLog);
router.get("/getalllogs",GetAllLogs);

module.exports = router;

