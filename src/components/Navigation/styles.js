import styled from 'styled-components';

import navigationText from '../../ui/Text';
import FlexRow from '../../ui/Flex';

const NavLink = styled.a`
  ${navigationText}
  cursor: pointer;
  text-decoration: none;
  transition: color 0.2s ease-out;
  text-transform: uppercase;
  &:hover {
    color: #dcdcdc;
    text-decoration: underline;
  }
`;

const NavItem = styled.div`
  padding: 0 10px;

  @media (max-width: 767.98px) {
    padding: 5px 0;
  }
`;

const FullWidthFlexRow = styled(FlexRow)`
  flex: 1 1 100%;

  @media (max-width: 767.98px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const NavContainer = styled(FullWidthFlexRow)`
  justify-content: space-between;
  padding: 0 20px;
`;

const NavMain = styled(FullWidthFlexRow)`
  justify-content: flex-start;
`;

const NavSecondary = styled(FullWidthFlexRow)`
  justify-content: flex-end;
`;

export { NavLink, NavItem, NavContainer, NavMain, NavSecondary, FullWidthFlexRow };
