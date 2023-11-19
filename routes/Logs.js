const express = require("express");
const router = express.Router();
const {GetLogs}= require("../controller/GetLogs");


router.get("/getLogs",GetLogs);

module.exports = router;
