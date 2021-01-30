"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var toursSchema = new mongoose_1.Schema({});
var tours = mongoose_1.model('Itours', toursSchema);
exports.default = tours;
