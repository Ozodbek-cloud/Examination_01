import winston from "winston"
import path from "path"

const logger = winston.createLogger({
    level:"info",
    format:winston.format.combine(
        winston.format.timestamp({format:"YYYY-MM-DD HH:mm:ss"}),
        winston.format.printf( ({timestamp,level,message}) => {
            return `${timestamp}-${level}:${message}`
        } )
    ),
    transports:[
        new winston.transports.File({filename:path.join(process.cwd(),"src","Log","errors.log")})
    ]
})

export default logger