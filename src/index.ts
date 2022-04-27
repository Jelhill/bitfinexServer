import appServer from './app';
import logger from '../src/utils/logget';
import { processRequest, ValidatePayload } from './worker';
import { offers } from './data';
const Link = require('grenache-nodejs-link')
const { PeerRPCServer }  = require('grenache-nodejs-http');
// const PORT = process.env.PORT || 3001


function connectClient() {
    const link = new Link({
        grape: 'http://127.0.0.1:30001'
    })
    link.start()
    
    const peer = new PeerRPCServer(link, {
        timeout: 300000
    })
    peer.init()
    
    const port = 1024 + Math.floor(Math.random() * 1000)
    const service = peer.transport('server')
    
    service.listen(port)
        setInterval(function () {
        link.announce('rpc_test', service.port, {})
    }, 1000)

    
    try {
        service.on('request', (rid, key, payload, handler) => {
            const response = processRequest(payload.path, payload.msg)
            handler.reply(null, response)
        })
        
    } catch (error) {
        console.log(error)
    }
    
}


async function main() {
    // appServer.listen(4000, () => logger.info("Server started on port " + 4000))
    connectClient()
    
} main();