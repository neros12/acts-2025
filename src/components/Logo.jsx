import { twMerge } from 'tailwind-merge'

import { BaseLink } from 'components/base/BaseLink'

export function Logo({ className, ...props }) {
    return (
        <BaseLink
            url="/"
            {...props}
            className={twMerge('text-3xl font-semibold', className)}
        >
            ACTS 2025
        </BaseLink>
    )
}
