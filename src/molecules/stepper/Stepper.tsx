import styled from "styled-components";
import TextTypography from "../../atoms/typography/TextTypography";
import ClearButton from "../../atoms/buttons/ClearButton";

const StepperContainer = styled('div')`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const StepperTypography = styled(TextTypography)`
    line-height: 23px;
    color: ${props => props.theme.text.dark};
`
const StepperButton = styled(ClearButton)`
    width: 148px;
    height: 50px;
    border: 1px solid ${props => props.theme.border.dark};

`

const Stepper = () => {
    return (
        <StepperContainer>
            <StepperTypography>1 of 3</StepperTypography>
            <StepperButton>Next step</StepperButton>
        </StepperContainer>
    )
}
export default Stepper;