import { Server } from 'Socket.IO'
import type { NextApiRequest, NextApiResponse } from 'next'

const SocketHandler = (req: any, res: any) => {
    if (res.socket.server.io) {
        console.log('Socket is already running')
    } else {
        console.log('Socket is initializing')
        const io = new Server(res.socket.server)
        res.socket.server.io = io

        io.on('connection', socket => {

            socket.on('joiningRoom', (id) => {
                console.log(`USer: ${id} joining Room`)
                console.log(id)
                socket.join(id)
            })
            // socket.on('sendMessage', (val) => {
            //     // console.log(val)
            //     val.userIds.forEach((id: number) => {
            //         io.to(id.toString()).emit('receivedMessage', val.message)
            //     })
            // })

            socket.on('input-change', msg => {
                // console.log(msg)
                const users = ['99bb8b49-57e3-4c07-967a-d3582a6aa741', 'f492dc23-ffa6-4abd-889b-f58ae4dad36d', 'ec43fdba-0038-40d7-a97f-51fb6fe0e974']
                users.forEach((id) => {
                    io.to(id.toString()).emit('update-input', msg)
                })

            })
        })
    }
    res.end()
}

export default SocketHandler