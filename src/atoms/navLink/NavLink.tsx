import { LinkTypography } from "../typography/LinkTypography";

interface Props {
    name: string;
    url?: string;
    onClick?: (e: React.SyntheticEvent, id: string) => void; 
}

const NavLink = ({ name, url }: Props) => {
    const handleClick = (e: React.SyntheticEvent, id: string ) => {
        if (url) {
            let element = document.getElementById(id.slice(1));
            e.preventDefault();
            element && element.scrollIntoView({ behavior: "smooth", block: "start"});
        }
    }
    return (
        <LinkTypography onClick={(e) => handleClick(e, url!)} href={url}>{name}</LinkTypography>
    );
};
  
export default NavLink;