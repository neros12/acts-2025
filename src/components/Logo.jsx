import { Link } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

import { BaseLink } from 'components/base/BaseLink'

export function Logo({ className, ...props }) {
    return (
        <Link to="/" {...props} className={className}>
            <img src="/images/acts-logo.png" alt="" className="h-full" />
        </Link>
    )
}
