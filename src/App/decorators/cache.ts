import 'reflect-metadata';
import { clearHach } from '../../database/redis';
import { metadata } from './enums/enum.metadata';

export function clearCache(hKey:string) {
    const CacheClear = async (req, res, next) => {
        await next()
        const hValue = req.body[hKey];
        if (hValue) {
            clearHach({ hKey: req.body[hValue] }); 
        }
        
    };
    return function (target: any, key: string, descriptor: PropertyDescriptor) {
        Reflect.getMetadata(metadata.cache, target, key);
        Reflect.defineMetadata(metadata.cache, CacheClear, target, key)
    }

}
