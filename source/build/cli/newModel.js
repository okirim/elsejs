"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports._createNewModel = void 0;
var fs_1 = __importDefault(require("fs"));
/**
 *
 * @param modelName
 */
function _createNewModel(modelName, projectPath) {
    var modelSubs = "\nimport { model, Schema, Document } from 'mongoose';\n\nexport interface I" + modelName + " {\n \n}\n\nconst " + modelName + "Schema: Schema = new Schema({\n \n});\n\nconst " + modelName + " = model<'I" + modelName + "' & Document>('I" + modelName + "', " + modelName + "Schema);\n\nexport default " + modelName + " ;\n";
    fs_1.default.mkdirSync(projectPath + "/app/Models/" + modelName);
    fs_1.default.writeFileSync(projectPath + "/app/Models/" + modelName + "/" + modelName + ".model.ts", modelSubs);
    fs_1.default.appendFileSync(projectPath + "/src/Models/index.ts", "\n export * from './" + modelName + "/" + modelName + ".model';");
}
exports._createNewModel = _createNewModel;
