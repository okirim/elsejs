#!/usr/bin/env node

import process from "process";
import { Command } from "commander";
import { _createNewController } from "./newController";
import { _createNewModel } from "./newModel";
const program = new Command();
program.version("0.0.1");

const projectPath = process.cwd();

program
  .command("m <modelName>")
  .description("create new Model")
  .action((modelName) => {
    _createNewModel(modelName,projectPath);
    console.log(`${modelName}.model created`);
    
  });
program
  .command("c <controllerName>")
  .description("create new controller")
  .action((controllerName) => {
    _createNewController(controllerName,projectPath);
    console.log(`${controllerName}.controller created`);
  });
program
  .command("mc <name>")
  .description("create new controller and model")
  .action((name) => {
     _createNewController(name, projectPath);
    console.log(`${name}.controller created`);
     _createNewModel(name, projectPath);
    console.log(`${name}.model created`);
  });
program.parse(process.argv);
