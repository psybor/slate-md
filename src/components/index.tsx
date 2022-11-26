import React, { Ref, PropsWithChildren, HTMLAttributes } from 'react';
import ReactDOM from 'react-dom';
export { Toolbar } from './Toolbar';
export { RichIcon } from './Icon';
export { Button, ToolbarBtn } from './Button';
export { H1Element } from './renderEle/H1Element';
export { H2Element } from './renderEle/H2Element';
export { H3Element } from './renderEle/H3Element';
export { DefaultElement } from './renderEle/DefaultElement';
export { LinkElement } from './renderEle/LinkElement';

export const EditorValue = React.forwardRef(
  (
    {
      className,
      value,
      ...props
    }: PropsWithChildren<HTMLAttributes<HTMLDivElement>> & { value: any },
    ref: Ref<HTMLDivElement> | undefined
  ) => {
    const textLines = value.document.nodes
      .map(node => node.text)
      .toArray()
      .join('\n');
    return (
      <div ref={ref} {...props} className={className}>
        <div>Slate's value as text</div>
        <div>{textLines}</div>
      </div>
    );
  }
);

export const Portal = ({ children }) => {
  return typeof document === 'object'
    ? ReactDOM.createPortal(children, document.body)
    : null;
};
