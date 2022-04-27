import * as express from "express"
const route = express.Router();
import { serviceLocate } from '../config/di'; 

// const merchantController = serviceLocate.get("merchantController")

route.get("/", (req, res) => {
    res.json("Welcome")
})

route.get("/offers", 
    (req: express.Request, res: express.Response) => {
})



export default route;