import React from 'react';
import { useFocused, useSelected } from 'slate-react';
import { InlineChromiumBugfix } from './InlineChromiumBugfix';

export const LinkElement = props => {
  const selected = useSelected();
  const focused = useFocused();
  console.log('selected, focus', selected, focused);
  const element = props.element;
  return (
    <a {...props.attributes} href={element.url}>
      <InlineChromiumBugfix />
      {props.children}
      <InlineChromiumBugfix />
    </a>
  );
};
