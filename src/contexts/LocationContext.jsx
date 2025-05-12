import { useState, useEffect } from 'react'
import constate from 'constate'
import axios from 'axios'

export const [LocationContextProvider, useLocationContext] = constate(() => {
    const [isKorea, setIsKorea] = useState(false)

    useEffect(() => {
        ;(async () => {
            try {
                const axiosResult = await axios.get('https://ipapi.co/json/')
                if (axiosResult.data.country === 'KR') {
                    setIsKorea(true)
                }
            } catch {}
        })()
    }, [])

    return { isKorea, setIsKorea }
})
