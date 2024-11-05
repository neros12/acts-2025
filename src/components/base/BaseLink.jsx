import { Link } from 'react-router-dom'

export function BaseLink({ children, url, ...props }) {
    return (
        <Link to={url} {...props}>
            {children}
        </Link>
    )
}
