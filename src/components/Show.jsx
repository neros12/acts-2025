import { Fragment } from 'react'

export default function Show(props) {
    const { children, show, as, ...otherProps } = props
    const Component = as ?? Fragment

    if (show) {
        if (Component) {
            return <Component {...otherProps}>{children}</Component>
        }
        return children
    }
    return null
}
