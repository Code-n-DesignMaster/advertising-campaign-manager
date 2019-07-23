import React from 'react';
import Image from './styles';

const defaultSrc = 'https://ui-avatars.com/api/?name=?&background=A9A9A9&color=FFFFFF';

const Avatar = props => {
  return <Image src={defaultSrc} {...props} />;
};

export default Avatar;
