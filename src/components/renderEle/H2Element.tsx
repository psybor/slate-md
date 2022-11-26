import React from 'react';

export const H2Element = (props) => {
  return <h2 {...props.attributes}>{props.children}</h2>;
};
