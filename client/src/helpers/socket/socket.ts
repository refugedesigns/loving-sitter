import { useState, useCallback } from "react"
import openSocket, { Socket } from "socket.io-client"



export const useSocket = () => {
    const [socket, setSocket] = useState<Socket | undefined>()

    const initSocket = useCallback(() => {
        setSocket(openSocket('http://localhost:3001', {withCredentials: true}))
    }, [])

    return {
        socket,
        initSocket
    }
}