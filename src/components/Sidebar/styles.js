import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 86px 48px 48px;
`;

const Actions = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-end;
  position: absolute;
  top: 2rem;
  right: 2rem;
`;

const Icon = styled.div`
  margin-left: 15px;
  color: #747474;
  cursor: pointer;
`;

export { Wrapper, Actions, Icon };
