"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enum_1 = require("./enum/enum");
var dayCheck = enum_1.DaysWeek.Saturday;
var result = (0, enum_1.isWeek)(dayCheck);
console.log(result);
