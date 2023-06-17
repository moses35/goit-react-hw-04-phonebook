import styled from '@emotion/styled';

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 250px;
  gap: 10px;
  > label {
    font-weight: 500;
  }
  > input:focus {
    outline: none !important;
    box-shadow: 0 0 2px #2fa172;
    border-color: #2fa172;
  }
`;
