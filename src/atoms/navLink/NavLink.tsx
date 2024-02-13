import LinkTypography from "../typography/LinkTypography";

interface Props {
    name: string;
    url?: string;
}

const NavLink = ({ name, url }: Props) => {
    return (
        <LinkTypography href={url}>{name}</LinkTypography>
    );
};
  
export default NavLink;