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
                socket.join(id)
            })

            socket.on('input-change', (val) => {
                const users = ['99bb8b49-57e3-4c07-967a-d3582a6aa741', 'ec43fdba-0038-40d7-a97f-51fb6fe0e974']
                users.forEach((id: string) => {
                    io.to(id).emit('update-input', val.msg)
                })
            })
        })
    }
    res.end()
}

export default SocketHandler