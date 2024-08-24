import type {AnchorHTMLAttributes} from "react";

interface LinkButtonProps {
    href: string;
    text: string;
    attrs?: AnchorHTMLAttributes<HTMLAnchorElement>;
}

const LinkButton = (props: LinkButtonProps) => {
    const { href, text, attrs } = props;

    return (
        <a {...attrs} className="flex w-20 items-center justify-center p-2 hover:bg-bg-hover" href={href}>
            <div>{text}</div>
        </a>
    );
}

export default LinkButton;
