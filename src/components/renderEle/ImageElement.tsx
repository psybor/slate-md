import React from 'react';

export const ImageElement = props => {
  return <img {...props.attributes}>{props.children}</img>;
};
