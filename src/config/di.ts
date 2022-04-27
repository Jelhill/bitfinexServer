import { serviceLocator } from '../libs/serviceLocator';
import { createLogger, format, transports } from "winston";
import { config } from "../config/config"
import "winston-daily-rotate-file";
import * as mongoose from 'mongoose'


serviceLocator.register('logger', () => {
    const logger = createLogger({
        level: "info",
        format: format.combine(
            format.timestamp(),
            format.json()
        ),
        defaultMeta: { service: "assure-user-service" },
        transports: [
            new transports.File({ filename: "./logs/error.log", level: 'error' }),
            new transports.File({ filename: "./logs/info.log", level: 'info' })
        ]
    });

    if (process.env.NODE_ENV !== 'production') {
        logger.add(new transports.Console({
            format: format.simple(),
        }))
    }
    return logger
})



// serviceLocator.register('userService', (serviceLocator: any) => {
//     const logger = serviceLocator.get('logger')
//     const mongoClient = serviceLocator.get('mongo')
//     const elasticSearch = serviceLocator.get('ElasticSearch')
//     return new UserService(logger, mongoClient, elasticSearch )
// })

// serviceLocator.register('merchantService', (serviceLocator: any) => {
//     const logger = serviceLocator.get('logger')
//     const mongoClient = serviceLocator.get('mongo')
//     const elasticSearch = serviceLocator.get('ElasticSearch')
//     return new MerchantService(logger, mongoClient, elasticSearch )
// })


export const serviceLocate = serviceLocator