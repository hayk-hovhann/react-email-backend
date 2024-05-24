import {allowedOrigins} from "./allowedOrigins";


export const corsOptions = {
    origin: (origin: string, callback: (message: Error | null, isOk?: boolean) => void) => {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true) // first arg is the Error and the second one points all's ok
        } else {
            callback(new Error("Not allowed by CORS"))
        }
    },
    optionsSuccessStatus: 200
}
