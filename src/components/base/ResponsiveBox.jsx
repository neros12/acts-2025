import { twMerge } from 'tailwind-merge'

export function SmBox({ className, as, children, ...props }) {
    const CustomTag = as ?? 'div'

    return (
        <CustomTag className={twMerge(className, 'sm:hidden')} {...props}>
            {children}
        </CustomTag>
    )
}

export function LgBox({ className, as, children, ...props }) {
    const CustomTag = as ?? 'div'

    return (
        <CustomTag className={twMerge(className, 'max-sm:hidden')} {...props}>
            {children}
        </CustomTag>
    )
}
