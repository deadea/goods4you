import styled from "styled-components";
import TextTypography from "../../atoms/typography/TextTypography";

const CatalogCardContainer = styled('div')`
    width: 280px;
    height: 358px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`
const ItemNameTypography = styled(TextTypography)`
    line-height: 23px;
    color: ${props => props.theme.text.dark};
`
const ItemPriceTypography = styled(TextTypography)`
    font-size: 20px;
    font-weight: 400;
    line-height: 29px;
    color: ${props => props.theme.text.dark};
`
const ImageContainer = styled('div')`
    border-radius: 4px;
    width: 280px;
    height: 293px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const TextContainer = styled('div')`
    display: flex;
    flex-direction: column;
    gap: 3px;
`

const Image = styled('img')`
    width: auto;
    height: auto;
    max-width: 280px;
    max-height: 293px;
`
interface Props {
    name: string;
    price: string;
    img: string;
    width?: string;
    id?: string;
    onClick?: (id:string | undefined) => void;
}

const CatalogCard = ({ name, price, img, width = '280px', onClick, id }: Props) => {
    const handleClick = (id: string | undefined) => {
       if (onClick) onClick(id)
    }
    return (
        <CatalogCardContainer style={{width: width}} onClick={() => handleClick(id)}>
            <ImageContainer>
                <Image src={img} alt={`picture of ${name}`}  />
            </ImageContainer>
            <TextContainer>
                <ItemNameTypography>{name}</ItemNameTypography>
                <ItemPriceTypography>{`${price} $`}</ItemPriceTypography>
            </TextContainer>
        </CatalogCardContainer>
    )
}
export default CatalogCard;