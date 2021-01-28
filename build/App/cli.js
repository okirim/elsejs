"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var process_1 = __importDefault(require("process"));
var commander_1 = require("commander");
var fs_1 = __importDefault(require("fs"));
var program = new commander_1.Command();
program.version("0.0.1");
var AppPath = process_1.default.cwd();
program
    .command("model <modelName>")
    .description("create new Model")
    .action(function (modelName) {
    createNewModel(modelName);
    console.log(modelName + " created");
});
program
    .command("controller <controllerName>")
    .description("create new controller")
    .action(function (controllerName) {
    createNewController(controllerName);
    console.log(controllerName + " created");
});
program.parse(process_1.default.argv);
/**
 *
 * @param modelName
 */
function createNewModel(modelName) {
    var modelSubs = "\nimport { model, Schema, Document } from 'mongoose';\n\nexport interface I" + modelName + " {\n \n}\n\nconst " + modelName + "Schema: Schema = new Schema({\n \n});\n\nconst " + modelName + " = model<'I" + modelName + "' & Document>('I" + modelName + "', " + modelName + "Schema);\n\nexport default " + modelName + " ;\n";
    fs_1.default.mkdirSync(AppPath + "/../../src/models/" + modelName);
    fs_1.default.writeFileSync(AppPath + "/../../src/models/" + modelName + "/" + modelName + ".model.ts", modelSubs);
    fs_1.default.appendFileSync(AppPath + "/../../src/models/index.ts", "\n export * from './" + modelName + "/" + modelName + ".model';");
}
/**
 *
 * @param controllerName
 */
function createNewController(controllerName) {
    var controllerSub = "\nimport {\n    RequestController,\n    Response,\n    PUT,\n    PATCH,\n    DELETE,\n    NextFunction,\n    controller,\n    GET,\n    middleware,\n    POST,\n    requiredInputs,\n    AppError,\n    catchError\n} from \"../BaseController\";\n\n@controller('/" + controllerName + "')\nexport class LoginController {\n     /**\n      * @GET(\"/\")\n      * @catchError()\n      * @middleware(auth()) // last one to be executed !imporatnt \n      * @middleware(_ex())//first inde to be executed\n      * @requiredInputs('name','email',....)\n      */\n    @GET(\"/\")\n    @catchError()\n\n    async index(req: RequestController, res: Response, next: NextFunction) {\n        next(\n            new AppError('unhandled index method', 400)\n        )\n    }\n    @POST(\"/\")\n    @catchError()\n\n    async store(req: RequestController, res: Response, next: NextFunction) {\n        next(\n            new AppError('unhandled store method', 400)\n        )\n    }\n    @PUT(\"/:id\")\n    @catchError()\n\n    async update(req: RequestController, res: Response, next: NextFunction) {\n        next(\n            new AppError('unhandled update method', 400)\n        )\n    }\n    @DELETE(\"/:id\")\n    @catchError()\n\n    async destroy(req: RequestController, res: Response, next: NextFunction) {\n        next(\n           new AppError('unhandled destroy method', 400)\n      )\n    }\n}\n\n    ";
    //fs.mkdirSync(`${AppPath}/../../src/http/controller/${controllerName}`);
    fs_1.default.writeFileSync(AppPath + "/../../src/http/controllers/" + controllerName + ".controller.ts", controllerSub);
    fs_1.default.appendFileSync(AppPath + "/../../src/http/controllers/index.ts", "\n export * from './" + controllerName + "/" + controllerName + ".controller';");
}
