import process from "process";
import { Command } from "commander";
import fs from "fs";
const program = new Command();
program.version("0.0.1");

const AppPath = process.cwd();

program
  .command("model <modelName>")
  .description("create new Model")
  .action((modelName) => {
    createNewModel(modelName);
    console.log(`${modelName} created`);
  });
program
  .command("controller <controllerName>")
  .description("create new controller")
  .action((controllerName) => {
    createNewController(controllerName);
    console.log(`${controllerName} created`);
  });

program.parse(process.argv);
/**
 *
 * @param modelName
 */
function createNewModel(modelName) {
  const modelSubs = `
import { model, Schema, Document } from 'mongoose';

export interface I${modelName} {
 
}

const ${modelName}Schema: Schema = new Schema({
 
});

const ${modelName} = model<'I${modelName}' & Document>('I${modelName}', ${modelName}Schema);

export default ${modelName} ;
`;
  fs.mkdirSync(`${AppPath}/../../src/models/${modelName}`);
  fs.writeFileSync(
    `${AppPath}/../../src/models/${modelName}/${modelName}.model.ts`,
    modelSubs
  );
  fs.appendFileSync(
    `${AppPath}/../../src/models/index.ts`,
    `\n export * from './${modelName}/${modelName}.model';`
  );
}
/**
 *
 * @param controllerName
 */
function createNewController(controllerName) {
  const controllerSub = `
import {
    RequestController,
    Response,
    PUT,
    PATCH,
    DELETE,
    NextFunction,
    controller,
    GET,
    middleware,
    POST,
    requiredInputs,
    AppError,
    catchError
} from "../BaseController";

@controller('/${controllerName}')
export class LoginController {
     /**
      * @GET("/")
      * @catchError()
      * @middleware(auth()) // last one to be executed !imporatnt 
      * @middleware(_ex())//first inde to be executed
      * @requiredInputs('name','email',....)
      */
    @GET("/")
    @catchError()

    async index(req: RequestController, res: Response, next: NextFunction) {
        next(
            new AppError('unhandled index method', 400)
        )
    }
    @POST("/")
    @catchError()

    async store(req: RequestController, res: Response, next: NextFunction) {
        next(
            new AppError('unhandled store method', 400)
        )
    }
    @PUT("/:id")
    @catchError()

    async update(req: RequestController, res: Response, next: NextFunction) {
        next(
            new AppError('unhandled update method', 400)
        )
    }
    @DELETE("/:id")
    @catchError()

    async destroy(req: RequestController, res: Response, next: NextFunction) {
        next(
           new AppError('unhandled destroy method', 400)
      )
    }
}

    `;
  //fs.mkdirSync(`${AppPath}/../../src/http/controller/${controllerName}`);
    
  fs.writeFileSync(
    `${AppPath}/../../src/http/controllers/${controllerName}.controller.ts`,
    controllerSub
  );
  fs.appendFileSync(
    `${AppPath}/../../src/http/controllers/index.ts`,
      `\n export * from './${controllerName}/${controllerName}.controller';`
  );
}
