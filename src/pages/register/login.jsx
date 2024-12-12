import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const navigate = useNavigate()

    useEffect(() => {
        alert('Registration is not open yet')
        navigate('/')
    }, [])

    return <></>
}
