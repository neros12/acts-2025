import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SignUp() {
    const navigate = useNavigate()

    useEffect(() => {
        alert('Registration is not open yet')
        navigate(-1)
    }, [])

    return <></>
}
