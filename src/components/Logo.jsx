import { Link } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

import { BaseLink } from 'components/base/BaseLink'

export function Logo({ className, ...props }) {
    return (
        <Link to="/" {...props} className={twMerge('h-12', className)}>
            <img src="/images/acts-logo.svg" alt="" className="h-full w-full" />
        </Link>
    )
}
