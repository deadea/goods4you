import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux'

import SubTitleTypography from '../atoms/typography/SubTitleTypography';
import Filter from '../molecules/filter/Filter';
import CatalogCard from '../molecules/catalogCard/CatalogCard';
import AccentButton from '../atoms/buttons/AccentButton';
import { RootState } from '../store/store';
import { getNextProducts } from '../store/slices/productsSlice';


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
    const dispatch = useDispatch()
    const categories = useSelector((state: RootState) => state.categories.categories)
    const products = useSelector((state: RootState) => state.products.products)
    const filteredProducts = useSelector((state: RootState) => state.products.filteredProducts)
    const activeCategory = useSelector((state: RootState) => state.categories.activeCategory)
    const total = useSelector((state: RootState) => state.products.products.total)
    const totalFiltered = useSelector((state: RootState) => state.products.filteredProducts.total)
    const limit = useSelector((state: RootState) => state.products.limit)

    const cards = products.products.map(({id, title, price, images}) => {
        return <CatalogCard key={id} name={title} price={price} img={images[0]}/> 
    })
    const cardsFiltered = filteredProducts?.products?.map(({id, title, price, images}) => {
        return <CatalogCard key={id} name={title} price={price} img={images[0]}/> 
    })
    
    let isButtonVisible = true
    if (activeCategory === 'none') {
        if (limit >= total) isButtonVisible = false;

    } else if (limit >= totalFiltered) isButtonVisible = false;

    return (
        <CatalogSection id='catalog'>
            <CatalogContainer>
                <SubTitleTypography>Catalog</SubTitleTypography>
                <CatalogContent>
                    <Filter categories={categories} active={activeCategory} />
                    <CardsContainer>
                        {activeCategory != 'none' ? cardsFiltered : cards}
                        <ButtonContainer>
                            {isButtonVisible && <MoreButton onClick={() => dispatch(getNextProducts(9))}>Show more</MoreButton>}
                        </ButtonContainer>
                    </CardsContainer>
                </CatalogContent>
            </CatalogContainer>
        </CatalogSection>
    );
  }
  
export default Catalog;