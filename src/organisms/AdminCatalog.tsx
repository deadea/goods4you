import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux'
import CatalogCard from '../molecules/catalogCard/CatalogCard';
import AccentButton from '../atoms/buttons/AccentButton';
import { getNextProducts, getProducts } from '../store/slices/productsSlice';
import { RootState } from '../store/store';
import SubTitleTypography from '../atoms/typography/SubTitleTypography';
import { useDebounce } from '../utils/useDebounce';
import Service from '../service/Service';
import { useNavigate } from "react-router-dom";

const CatalogSection = styled('section')`
    width: 100%;
    background: ${props => props.theme.background.light}
`
const CatalogContainer = styled('div')`
    width: 100%;
    max-width: 1180px;
    margin: 0 auto;
    padding: 54px 130px 53px 130px;
    background: ${props => props.theme.background.light};
    gap: 50px;
    display: flex;
    flex-direction: column;
`

const CardsContainer = styled('div')`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    max-width: 1180px;
    gap: 20px;
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
const SearchButton = styled(AccentButton)`
    max-width: 140px;
`
const SearchContainer = styled('div')`
    display: flex;
    justify-content: space-between;
    gap: 19px;
`
const StyledInput = styled('input')`
    width: 100%;
    background: rgba(246, 246, 246, 1);
    border: none;
    outline: none;
    border-radius: 4px;
    padding: 19px 17px;
    &::placeholder {
        color: rgba(178, 181, 187, 1);
    }
`

const AdminCatalog = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [searchTermBtn, setSearchTermBtn] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const products = useSelector((state: RootState) => state.products.products)
    const total = useSelector((state: RootState) => state.products.products.total)
    const limit = useSelector((state: RootState) => state.products.limit)

    const isButtonVisible = limit >= total ? false : true

    const handleChange = useDebounce((e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value)
    }, 500);
    
    const firstUpdate = useRef(true);
    useEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }
        if (!searchTerm) return
        Service.searchProducts(searchTerm)
        .then((result) => {
          if (result.error) {
            console.log('error')
          } else {
            dispatch(getProducts(result))
          }
        })
        .catch(() => {
          console.log('error2')
        })
    }, [searchTerm, searchTermBtn])

    const handleClick = (id: string | undefined) => {
        navigate('/product', {
            state: {
              id: id,
            }
        })
    }

    const cards = products.products.map(({id, title, price, images}) => {
        return <CatalogCard onClick={handleClick} width='375px' key={id} id={id} name={title} price={price} img={images[0]}/> 
    })

    return (
        <CatalogSection>
            <CatalogContainer>
                <SubTitleTypography>All products</SubTitleTypography>
                <SearchContainer>
                    <StyledInput type='text' placeholder='Search by title' onChange={handleChange}/>
                    <SearchButton onClick={() => setSearchTermBtn(searchTerm)}>Search</SearchButton>
                </SearchContainer>
                <CardsContainer>
                    {cards}
                    <ButtonContainer>
                        {isButtonVisible && <MoreButton onClick={() => dispatch(getNextProducts(9))}>Show more</MoreButton>}
                    </ButtonContainer>
                </CardsContainer>
            </CatalogContainer>
        </CatalogSection>
    )

}
export default AdminCatalog;