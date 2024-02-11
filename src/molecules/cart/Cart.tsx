import styled from 'styled-components';
import LinkTypography from "../../atoms/typography/LinkTypography";
import Badge from '../../atoms/badge/Badge';
import cart from '../../assets/svg/Cart.svg'

const CartContainer = styled('div')`
    display: flex;
    gap: 41px;
    align-items: baseline;
    height: 20px;
`
interface Props {
    num: number;
} 

const Cart = ({ num }: Props) => {
    return (
        <CartContainer>
            <LinkTypography>Cart</LinkTypography>
            <div style={{position: 'relative'}}>
                <img src={cart} alt='cart' width='20px' height='14px' />
                <Badge>{num}</Badge>
            </div>
            
        </CartContainer>
    );
  }
  
export default Cart;