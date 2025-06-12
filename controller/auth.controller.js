const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const userModel = require("../models/User.model");
const asyncHandler = require("express-async-handler");
const {v4: uuidv4} = require("uuid");