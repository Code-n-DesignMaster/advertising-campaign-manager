import styled from 'styled-components';

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${props => props.justifyContent || 'center'};
  align-items: ${props => props.alignItems || 'center'};
  height: 100%;
`;

export default FlexRow;
