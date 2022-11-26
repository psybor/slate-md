import React from 'react';

export const H1Element = props => {
  return <h1 {...props.attributes}>{props.children}</h1>;
};
