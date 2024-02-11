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
`
const TextContainer = styled('div')`
    display: flex;
    flex-direction: column;
    gap: 3px;
`

interface Props {
    name: string;
    price: string;
    img: string;
}

const CatalogCard = ({ name, price, img }: Props) => {
    return (
        <CatalogCardContainer>
            <ImageContainer>
                <img src={img} alt='product picture'  />
            </ImageContainer>
            <TextContainer>
                <ItemNameTypography>{name}</ItemNameTypography>
                <ItemPriceTypography>{price}</ItemPriceTypography>
            </TextContainer>
        </CatalogCardContainer>
    )
}
export default CatalogCard;