import React, { useState, useEffect, useCallback } from 'react';
import { NavLink, NavItem, NavContainer, NavMain, NavSecondary } from './styles';
import Arrow from '../../ui/Arrow';
import useWindowWidth from '../../hooks/useWindowWidth';

const Navigation = () => {
  const [navigationState, setNavigationState] = useState(true);
  const width = useWindowWidth();

  const handleWindowResize = useCallback(e => {
    if (e.target.innerWidth < 768 && navigationState) {
      setNavigationState(false);
    } else if (e.target.innerWidth >= 768) {
      setNavigationState(true);
    }
  });

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, [handleWindowResize]);

  return (
    <NavContainer>
      {width < 768 && <Arrow rotate={navigationState ? 180 : 0} onClick={() => setNavigationState(!navigationState)} />}
      {navigationState && (
        <>
          <NavMain>
            <NavItem>
              <NavLink href="#">Campaigns</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Marketing Automation</NavLink>
            </NavItem>
          </NavMain>
          <NavSecondary>
            <NavItem>
              <NavLink href="#">Blog</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">FAQ</NavLink>
            </NavItem>
          </NavSecondary>
        </>
      )}
    </NavContainer>
  );
};

export default Navigation;
