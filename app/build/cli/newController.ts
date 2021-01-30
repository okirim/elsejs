import fs from 'fs'
/**
 *
 * @param controllerName
 */
export function _createNewController(controllerName:string, projectPath:string) {
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
} from "../BaseController";

@controller('/${controllerName}')
export class ${controllerName} {
     /**
      * @GET("/path")
      * @middleware(auth()) // last one to be executed !imporatnt 
      * @middleware(_ex())//first inde to be executed
      * @requiredInputs('name','email',....)
      */
    @GET("/")

    async index(req: RequestController, res: Response, next: NextFunction) {
          try {
            
             
        }
        catch (error) {
            next(error)
        }
    }
    @POST("/")
   

    async store(req: RequestController, res: Response, next: NextFunction) {
            try {
            
             
        }
        catch (error) {
            next(error)
        }
    }
    @PUT("/:id")
    @catchError()

    async update(req: RequestController, res: Response, next: NextFunction) {
          try {
            
             
        }
        catch (error) {
            next(error)
        }
    }
    @DELETE("/:id")


    async destroy(req: RequestController, res: Response, next: NextFunction) {
         try {
            
             
        }
        catch (error) {
            next(error)
        }
    }
}

    `;
    //fs.mkdirSync(`${AppPath}/src/Http/controller/${controllerName}`);

    fs.writeFileSync(
        `${projectPath}/app/Http/controllers/${controllerName}.controller.ts`,
        controllerSub
    );
    fs.appendFileSync(
        `${projectPath}/app/Http/controllers/index.ts`,
        `\n export * from './${controllerName}.controller';`
    );
}
