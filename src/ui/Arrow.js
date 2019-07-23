import React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
  cursor: pointer;
  fill: ${props => props.fill || 'white'};
  width: ${props => props.width || 30}px;
  transition: transform 0.2s ease-out;
  transform: ${props => (props.rotate ? `rotate(${props.rotate}deg)` : 'rotate(0)')};
`;

const Arrow = props => {
  return (
    <SVG {...props} version="1.1" viewBox="0 0 129 129" enableBackground="new 0 0 129 129">
      <g>
        <path d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z" />
      </g>
    </SVG>
  );
};

export default Arrow;
