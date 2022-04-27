import { offers } from "./data";

export function ValidatePayload(payload) {
    return !Object.keys(payload.msg).length ? false : true;
}


export function processRequest(path, payload: any) {

    
    if(path.toLowerCase() === "/offers") {
        return { success: true, data: offers}
    }

    if(path.toLowerCase() === "/makeoffer") {
        const noError = ValidatePayload(payload);
        if(noError) {
            offers.push(payload);
            return { success: true, msg: offers }
        }else{
            return{success: false, msg: "Error in Payload! cannot validate request" }
        }
    }
}