import bodyParser from 'body-parser'
import cookieSession from 'cookie-session'
import { App } from './App/singeltons/app.singelton';



export const _use = () => {
    const _bodyParser = App.instance.use(bodyParser.urlencoded({ extended: true }))
    const _cookie = App.instance.use(cookieSession({ keys: ['setRandomKeyString'] }))
    /**
     * 
     *  _page404,
     *  _HandlingErrors
     */
    return {
        _bodyParser,
        _cookie,
    }
}
