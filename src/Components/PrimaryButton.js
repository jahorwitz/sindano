import styled from 'styled-components';


const PrimaryButtonContainer = styled.button`
  font-family: ${(props) => props.theme.fonts.text.font_family[0]};
  white-space: nowrap;
  width: 170px;
  height: 50px;
  color: ${(props) => props.theme.colors.alt_text_white};
  background-color: ${(props) => props.theme.colors.default_button_aqua};
  padding: 15px 28px;
  border: none;
  margin: 0;
  border-radius: 12px;
  font-weight: ${(props) => props.theme.fonts.text.weights.bold};
  font-size: ${(props) => props.theme.fonts.text.sizes.text_m};
  line-height: 1.25;
  cursor: pointer;
`;


function PrimaryButton({onClick, label}) {
  return (
    <PrimaryButtonContainer onClick={onClick}>
      {label}
    </PrimaryButtonContainer>
  );
}

export default PrimaryButton;
