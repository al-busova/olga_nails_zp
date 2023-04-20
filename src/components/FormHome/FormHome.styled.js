import styled from '@emotion/styled';

export const FormSimple = styled.form`
display: flex;
flex-direction: column;
gap: 16px;
align-items: center;
text-align: center;
> button {
    max-width:320px;
    font-size: 28px;
    padding: 12px;
}
font-weight: 400;
font-size: 36px;
line-height: 119.18%;
color: rgba(0, 0, 0, 0.54);
`;

export const LabelStyled = styled.label`
display: flex;
flex-direction: column;
gap: 6px;
align-items: center;
`;
export const InputStyled = styled.input`
border-radius: 20px;
padding: 12px 20px;
`;