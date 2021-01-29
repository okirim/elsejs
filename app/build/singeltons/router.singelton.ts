import express from 'express'

export class Router{
    private static routerInstance: express.Router;


    static get instance():express.Router {
        if (!Router.routerInstance) {
            return Router.routerInstance = express.Router();
        }
        return Router.routerInstance;
    }

} 