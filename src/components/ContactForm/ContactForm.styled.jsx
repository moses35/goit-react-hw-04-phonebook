import styled from '@emotion/styled';
import { Form as MainForm, ErrorMessage as Error } from 'formik';

export const Form = styled(MainForm)`
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
  > button {
    border-color: transparent;
    border-radius: 4px;
    max-width: 100px;
    font-weight: 500;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
      0px 2px 1px rgba(0, 0, 0, 0.2);
    &:active {
      background-color: #2fa172;
    }
  }
`;

export const ErrorMessage = styled(Error)`
  color: red;
  font-size: 11px;
`;
