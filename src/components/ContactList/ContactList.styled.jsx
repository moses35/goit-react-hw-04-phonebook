import styled from '@emotion/styled';

export const List = styled.ul`
  padding: 0px;

  > button {
    border-color: transparent;
    border-radius: 4px;
    max-width: 100px;
    font-weight: 500;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
      0px 2px 1px rgba(0, 0, 0, 0.2);
    &:hover {
      background-color: #2fa172;
    }
  }
`;

export const ListItem = styled.li`
  display: flex;
  width: 350px;
  margin-bottom: 10px;

  > button {
    margin-left: auto;
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
