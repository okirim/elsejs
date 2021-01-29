"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var process_1 = __importDefault(require("process"));
var commander_1 = require("commander");
var newController_1 = require("./newController");
var newModel_1 = require("./newModel");
var program = new commander_1.Command();
program.version("0.0.1");
var projectPath = process_1.default.cwd();
program
    .command("model <modelName>")
    .description("create new Model")
    .action(function (modelName) {
    newModel_1._createNewModel(modelName, projectPath);
    console.log(modelName + ".model created");
});
program
    .command("controller <controllerName>")
    .description("create new controller")
    .action(function (controllerName) {
    newController_1._createNewController(controllerName, projectPath);
    console.log(controllerName + ".controller created");
});
program
    .command("mc <name>")
    .description("create new controller and model")
    .action(function (name) {
    newController_1._createNewController(name, projectPath);
    console.log(name + ".controller created");
    newModel_1._createNewModel(name, projectPath);
    console.log(name + ".model created");
});
program.parse(process_1.default.argv);
