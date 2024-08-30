import { useState } from "react";
import type { Theme } from "../types/Theme.ts";
import MoonIcon from "../icons/moonIcon.tsx";
import SunIcon from "../icons/sunIcon.tsx";


const ThemeSwitch = () => {
    const [theme, setTheme] = useState<Theme>('dark');
    const toggleTheme = () => {
        theme === 'dark' ? setTheme('light') : setTheme('dark');
        document.documentElement.classList.toggle('light');
    }

    return (
        <button className='hover:bg-bg-hover px-4 py-2' onClick={toggleTheme}>
            {theme === 'light' ?
                <MoonIcon className='size-6' /> :
                <SunIcon className='size-6' />
            }
        </button>
    );
}

interface NavItemProps {
    href: string;
    text: string;
}

const NavItem = (props: NavItemProps) => {
    const { href, text } = props;
    return <li className='flex justify-center items-center'><a className="hover:bg-bg-hover px-4 py-2" href={href}>{text}</a></li>
}

const Navbar = () => (
    <nav className="sticky top-0 bg-bg py-4 px-2 flex justify-between">
        <ThemeSwitch />
        <div className="flex justify-end w-100">
            {/*TODO: show this only when scrolling down*/}
            {/*<span class="text-2xl">Eilay Katsnelson</span>*/}
            <ul className="flex space-x-4">
                <NavItem href='#home' text='Home' />
                <NavItem href='#projects' text='Projects' />
                <NavItem href='#exp' text='Experience' />
            </ul>
        </div>
    </nav>
);

export default Navbar;