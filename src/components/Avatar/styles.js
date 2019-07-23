import styled from 'styled-components';

const Image = styled.img`
  width: ${props => props.width || 40}px;
  border-radius: 2px;
`;

export default Image;
