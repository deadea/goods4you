import { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import styled from 'styled-components';
import SubTitleTypography from '../atoms/typography/SubTitleTypography';
import Service from '../service/Service';
import { getOneProduct } from '../store/slices/productsSlice';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';

const OneProductSection = styled('section')`
    width: 100%;
    background: ${props => props.theme.background.light};
`
const OneProductContainer = styled('div')`
    width: 100%;
    max-width: 1180px;
    margin: 0 auto;
    padding: 54px 130px 53px 130px;
    background: ${props => props.theme.background.light};
    gap: 50px;
    display: flex;
    flex-direction: column;
`

const OneProduct = () => {
    const location = useLocation();
    let id = location.state.id;
    const dispatch = useDispatch()

    useEffect(() => {
        Service.getOneProduct(id)
        .then((result) => {
          if (result.error) {
            console.log('error')
          } else {
            dispatch(getOneProduct(result))
          }
        })
        .catch(() => {
          console.log('error2')
        })
    }, [])
    const product = useSelector((state: RootState) => state.products.oneProduct)

    return (
        <OneProductSection>
            <OneProductContainer>
            <SubTitleTypography>Product {id}</SubTitleTypography>
            </OneProductContainer>
        </OneProductSection>


    );
  }
  
export default OneProduct;