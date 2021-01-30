import { Router } from './singeltons/router.singelton';
import { App } from './singeltons/app.singelton';
import { HandlingErrors, page404 } from "../exceptions";
import { _use } from "../use";


const _middlewares = () => {
  
    const _router=App.instance.use(Router.instance);
    const _page404=page404();
    const _HandlingErrors = App.instance.use(HandlingErrors);
    /**
     * respect the order
     *  _router,
     *  _page404,
     *  _HandlingErrors
     */
    return {
        _router,
        _page404,
        _HandlingErrors
    }
}
_use();
_middlewares();