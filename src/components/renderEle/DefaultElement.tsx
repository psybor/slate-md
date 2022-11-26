import React from 'react';

export const DefaultElement = props => {
  return <div {...props.attributes}>{props.children}</div>;
};
