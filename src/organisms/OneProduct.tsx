import styled from 'styled-components';

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
    return (
        <OneProductSection>
            <OneProductContainer>
            <>sdf</>
            </OneProductContainer>
        </OneProductSection>


    );
  }
  
export default OneProduct;