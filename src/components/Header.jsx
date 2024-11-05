import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

import { Button } from 'components/Button'
import { Logo } from 'components/Logo'
import { BaseLink } from 'components/base/BaseLink'
import { SmBox, LgBox } from 'components/base/ResponsiveBox'

export function Header() {
    return (
        <header className="fixed top-0 z-30 w-full bg-white px-4 py-4 lg:px-8 lg:pb-6 lg:pt-10">
            <LgBox className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <Logo />
                <div className="flex space-x-8">
                    <BaseLink url="/">Home</BaseLink>
                    <BaseLink url="/committes">Committes</BaseLink>
                    <BaseLink url="/?scroll=speakers">Speakers</BaseLink>
                    <BaseLink url="/?scroll=contact">Contact</BaseLink>
                </div>
                <button
                    onClick={() => alert('Registration is currently not open')}
                >
                    Sign-up
                </button>
            </LgBox>
            <SmBox className="flex items-center justify-between">
                <Logo />
                <Menu>
                    <MenuButton>클릭</MenuButton>
                    <MenuItems
                        transition
                        anchor="bottom end"
                        className="z-40 w-52 origin-top-right rounded-xl border border-white/5 bg-white p-1 text-sm/6 text-black transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
                    >
                        <MenuItem>
                            <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-white/10">
                                <div className="size-4 fill-white/30" />
                                Edit
                                <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">
                                    ⌘E
                                </kbd>
                            </button>
                        </MenuItem>
                        <MenuItem>
                            <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-white/10">
                                <div className="size-4 fill-white/30" />
                                Duplicate
                                <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">
                                    ⌘D
                                </kbd>
                            </button>
                        </MenuItem>
                        <div className="my-1 h-px bg-white/5" />
                        <MenuItem>
                            <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-white/10">
                                <div className="size-4 fill-white/30" />
                                Archive
                                <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">
                                    ⌘A
                                </kbd>
                            </button>
                        </MenuItem>
                        <MenuItem>
                            <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-white/10">
                                <div className="size-4 fill-white/30" />
                                Delete
                                <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">
                                    ⌘D
                                </kbd>
                            </button>
                        </MenuItem>
                    </MenuItems>
                </Menu>
            </SmBox>
        </header>
    )
}
