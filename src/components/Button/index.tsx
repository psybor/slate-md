import React, { HTMLAttributes } from 'react';
import { getClsPrefix } from '../../utils/prefix';
import { combineClassName } from '../../utils/className';
import './style.scss';

type ButtonProps = HTMLAttributes<HTMLSpanElement>;

type ToolbarBtnProps = HTMLAttributes<HTMLSpanElement> & {
  active: boolean;
};

export const Button = React.forwardRef<HTMLSpanElement, ButtonProps>(
  (props, ref) => {
    return <span {...props} ref={ref} />;
  }
);

export const ToolbarBtn = React.forwardRef<HTMLSpanElement, ToolbarBtnProps>(
  ({ active, className, ...restProps }, ref) => {
    return (
      <Button
        ref={ref}
        {...restProps}
        className={combineClassName(
          className,
          active && getClsPrefix('Active')
        )}
      />
    );
  }
);
