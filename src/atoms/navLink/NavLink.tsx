import LinkTypography from "../typography/LinkTypography";

interface Props {
    name: string;
}

const NavLink = ({ name }: Props) => {
    return (
        <LinkTypography href="#">{name}</LinkTypography>
    );
};
  
export default NavLink;