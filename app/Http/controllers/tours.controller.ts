
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
    catchError,
    cacheClear,
} from "../BaseController";

@controller('/tours')
export class tours {
     /**
      * @GET("/")
      * @catchError()
      * @cacheClear(hashKey)// ex: user_id
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

    