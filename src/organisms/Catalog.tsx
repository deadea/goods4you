import styled from 'styled-components';
import SubTitleTypography from '../atoms/typography/SubTitleTypography';
import Filter from '../molecules/filter/Filter';
import CatalogCard from '../molecules/catalogCard/CatalogCard';
import AccentButton from '../atoms/buttons/AccentButton';
import { CATALOGITEMS } from '../consts/consts';


const CatalogSection = styled('section')`
    width: 100%;
    background: ${props => props.theme.background.light}
`
const CatalogContainer = styled('div')`
    width: 100%;
    max-width: 1180px;
    margin: 0 auto;
    padding: 54px 130px 53px 130px;
    background: ${props => props.theme.background.light}
`
const CatalogContent = styled('div')`
    display: flex;
    gap: 20px;
    padding-top: 33px;
`
const CardsContainer = styled('div')`
    display: flex;
    flex-wrap: wrap;
    row-gap: 11px;
    column-gap: 20px;
`
const ButtonContainer = styled('div')`
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 21px;
`
const MoreButton = styled(AccentButton)`
    width: 171px;
`

const Catalog = () => {
    const cards = CATALOGITEMS.map(({name, price, img}) => {
        return <CatalogCard key={`${name}${Math.random()}`} name={name} price={price} img={img}/> 
    })
    return (
        <CatalogSection id='catalog'>
            <CatalogContainer>
                <SubTitleTypography>Catalog</SubTitleTypography>
                <CatalogContent>
                    <Filter />
                    <CardsContainer>
                        {cards}
                        <ButtonContainer>
                            <MoreButton>Show more</MoreButton>
                        </ButtonContainer>
                    </CardsContainer>
                </CatalogContent>
            </CatalogContainer>
        </CatalogSection>
    );
  }
  
export default Catalog;