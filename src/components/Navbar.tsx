import React from "react";
import {themeStore} from "../stores.ts";
import {useStore} from "@nanostores/react";
import sunIcon from '../icons/sun.svg';
import moonIcon from '../icons/moon.svg';


const ThemeSwitch = () => {
    const theme = useStore(themeStore);
    const toggleTheme = () => {
        document.body.classList.toggle('light');
        themeStore.set(theme === 'light' ? 'dark' : 'light');
    }

    return (
        <button className='hover:bg-bg-hover px-4 py-2' onClick={toggleTheme}>
            {theme === 'dark' ?
                <img src={sunIcon.src} alt='sun'/> :
                <img src={moonIcon.src} alt='moon'/>
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
    return <li><a className="hover:bg-bg-hover px-4 py-2" href={href}>{text}</a></li>
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