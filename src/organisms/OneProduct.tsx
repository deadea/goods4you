import { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import styled from 'styled-components';
import SubTitleTypography from '../atoms/typography/SubTitleTypography';
import Service from '../service/Service';
import { getOneProduct } from '../store/slices/productsSlice';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import '../../node_modules/react-image-gallery/styles/css/image-gallery.css'
import ImageGallery, { ReactImageGalleryItem, ReactImageGalleryProps } from "react-image-gallery";

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
    }, [dispatch, id])
    const product = useSelector((state: RootState) => state.products.oneProduct)

    const images = product.images.map((img: any) => {
      return {original: img, thumbnail: img, originalHeight: 460, thumbnailHeight: 75}
    })

    return (
        <OneProductSection>
            <OneProductContainer>
            <SubTitleTypography>Product {id}</SubTitleTypography>
            <div style={{width: '520px', height: '560px'}}>
            <ImageGallery items={images} showFullscreenButton={false} showPlayButton={false}/>
            </div>
            </OneProductContainer>
        </OneProductSection>


    );
  }
  
export default OneProduct;