import styled from "styled-components";

export const ButtonContainer = styled.div`
  background-color: #FAFAFA;
  border: 1px solid #FAFAFA;
  border-radius: 20px;

  height: 62px;
  width: 80%;

  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000000;

  /* Efeito de hover para quando passar o mouse por cima do botão. 
  Cursor :pointer muda o cursor do mouse também*/
  &: hover {
    background-color: #FAFAFA40;
    cursor: pointer;
  }
`;
