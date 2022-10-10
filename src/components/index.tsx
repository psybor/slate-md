import React, { Ref, PropsWithChildren } from 'react';
import ReactDOM from 'react-dom';

interface BaseProps {
  className: string;
  [key: string]: unknown;
}

export const Button = React.forwardRef(
  (
    {
      className,
      active,
      reversed,
      ...props
    }: PropsWithChildren<
      {
        active: boolean;
        reversed: boolean;
      } & BaseProps
    >,
    ref: Ref<HTMLSpanElement> | undefined
  ) => <span {...props} ref={ref} className={className} />
);

export const EditorValue = React.forwardRef(
  (
    {
      className,
      value,
      ...props
    }: PropsWithChildren<
      {
        value: any;
      } & BaseProps
    >,
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

export const Icon = React.forwardRef(
  (
    { className, ...props }: PropsWithChildren<BaseProps>,
    ref: Ref<HTMLSpanElement> | undefined
  ) => <span {...props} ref={ref} className={className} />
);

export const Instruction = React.forwardRef(
  (
    { className, ...props }: PropsWithChildren<BaseProps>,
    ref: Ref<HTMLDivElement> | undefined
  ) => <div {...props} ref={ref} className={className} />
);

export const Menu = React.forwardRef(
  (
    { className, ...props }: PropsWithChildren<BaseProps>,
    ref: Ref<HTMLDivElement> | undefined
  ) => <div {...props} ref={ref} className={className} />
);

export const Portal = ({ children }) => {
  return typeof document === 'object'
    ? ReactDOM.createPortal(children, document.body)
    : null;
};

export const Toolbar = React.forwardRef(
  (
    { className, ...props }: PropsWithChildren<BaseProps>,
    ref: Ref<HTMLDivElement> | undefined
  ) => <Menu {...props} ref={ref} className={className} />
);
