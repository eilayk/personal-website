interface NavItemProps {
    href: string;
    text: string;
}

const NavItem = (props: NavItemProps) => {
    const { href, text } = props;
    return <li><a href={href}>{text}</a></li>
}

const Navbar = () => (
    <nav>
        <div className="flex justify-end">
            {/*TODO: show this only when scrolling down*/}
            {/*<span class="text-2xl">Eilay Katsnelson</span>*/}
            <ul className="flex space-x-4">
                <NavItem href='#' text='Home' />
                <NavItem href='#' text='Projects' />
                <NavItem href='#' text='Experience' />
            </ul>
        </div>
    </nav>
);

export default Navbar;