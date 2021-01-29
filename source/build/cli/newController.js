"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports._createNewController = void 0;
var fs_1 = __importDefault(require("fs"));
/**
 *
 * @param controllerName
 */
function _createNewController(controllerName, projectPath) {
    var controllerSub = "\nimport {\n    RequestController,\n    Response,\n    PUT,\n    PATCH,\n    DELETE,\n    NextFunction,\n    controller,\n    GET,\n    middleware,\n    POST,\n    requiredInputs,\n    AppError,\n    catchError,\n    cacheClear,\n} from \"../BaseController\";\n\n@controller('/" + controllerName + "')\nexport class " + controllerName + " {\n     /**\n      * @GET(\"/\")\n      * @catchError()\n      * @cacheClear(hashKey)// ex: user_id\n      * @middleware(auth()) // last one to be executed !imporatnt \n      * @middleware(_ex())//first inde to be executed\n      * @requiredInputs('name','email',....)\n      */\n    @GET(\"/\")\n    @catchError()\n\n    async index(req: RequestController, res: Response, next: NextFunction) {\n        next(\n            new AppError('unhandled index method', 400)\n        )\n    }\n    @POST(\"/\")\n    @catchError()\n\n    async store(req: RequestController, res: Response, next: NextFunction) {\n        next(\n            new AppError('unhandled store method', 400)\n        )\n    }\n    @PUT(\"/:id\")\n    @catchError()\n\n    async update(req: RequestController, res: Response, next: NextFunction) {\n        next(\n            new AppError('unhandled update method', 400)\n        )\n    }\n    @DELETE(\"/:id\")\n    @catchError()\n\n    async destroy(req: RequestController, res: Response, next: NextFunction) {\n        next(\n           new AppError('unhandled destroy method', 400)\n      )\n    }\n}\n\n    ";
    //fs.mkdirSync(`${AppPath}/src/Http/controller/${controllerName}`);
    fs_1.default.writeFileSync(projectPath + "/app/Http/controllers/" + controllerName + ".controller.ts", controllerSub);
    fs_1.default.appendFileSync(projectPath + "/app/Http/controllers/index.ts", "\n export * from './" + controllerName + ".controller';");
}
exports._createNewController = _createNewController;
