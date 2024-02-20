import LabelTypography from '../typography/LabelTypography';

interface Props {
    label: string;
} 

const FilterCheckbox = ({ label }: Props) => {
    return (
        <>
            <div
                role="checkbox"
                aria-checked="false"
                aria-labelledby="checkbox-name">
            </div>
            <LabelTypography id="checkbox-name">{label}</LabelTypography>
        </>
    );
};
  
export default FilterCheckbox;