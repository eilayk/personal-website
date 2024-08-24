interface NavItemProps {
    href: string;
    text: string;
}

const NavItem = (props: NavItemProps) => {
    const { href, text } = props;
    return <li><a className="hover:bg-bg-hover px-4 py-2" href={href}>{text}</a></li>
}

const Navbar = () => (
    <nav>
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