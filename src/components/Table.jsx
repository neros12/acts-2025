import { twMerge } from 'tailwind-merge'

export function ProgramTable({ className, children }) {
    return (
        <div className={twMerge('sm:flex sm:items-center', className)}>
            {children}
        </div>
    )
}

export function TimeColumn({ className, children }) {
    return (
        <div
            className={twMerge(
                'flex items-center justify-center border-y px-0.5 py-1 font-semibold sm:w-24 sm:min-w-24 sm:border-y-0',
                className
            )}
        >
            {children}
        </div>
    )
}

export function ContentColumn({ className, children }) {
    return (
        <div
            className={twMerge(
                'flex-auto items-center justify-center py-1 pl-2 sm:border-l',
                className
            )}
        >
            {children}
        </div>
    )
}

export function PosterTable({ className, children }) {
    return (
        <div
            className={twMerge(
                'rounded-md bg-white p-2 font-light shadow-xl',
                className
            )}
        >
            {children}
        </div>
    )
}

export function PosterNumber({ className, children }) {
    return (
        <div className={twMerge('font-bold text-blue-500', className)}>
            {children}
        </div>
    )
}

export function PosterAuthor({ className, children }) {
    return <div className={twMerge('md:inline', className)}>{children}</div>
}

export function PosterAffiliation({ className, children }) {
    return (
        <div className={twMerge('text-gray-400 md:ml-4 md:inline', className)}>
            {children}
        </div>
    )
}

export function PosterTitle({ className, children }) {
    return <div className={twMerge('font-normal', className)}>{children}</div>
}
