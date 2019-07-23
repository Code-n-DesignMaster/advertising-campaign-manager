import styled from 'styled-components';

const Header = styled.div`
  width: 100%;
  background-color: ${props => props.backgroundColor || '#6495ED'};
  padding: 10px 20px;
  transition: all 0.2s ease-out;
`;

export default Header;
