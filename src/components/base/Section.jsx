import { twMerge } from 'tailwind-merge'

export function Section({ className, children, ...props }) {
    return (
        <section
            className={twMerge('py-8 sm:py-12 lg:py-16', className)}
            {...props}
        >
            {children}
        </section>
    )
}
