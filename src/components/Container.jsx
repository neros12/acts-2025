import { twMerge } from 'tailwind-merge'

export function Container({ className, as, ...props }) {
    const CustomTag = as ?? 'div'

    return (
        <CustomTag
            className={twMerge(
                'mx-auto w-full max-w-7xl p-4 sm:p-6 lg:p-8',
                className
            )}
            {...props}
        />
    )
}
