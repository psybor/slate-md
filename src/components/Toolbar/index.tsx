import React, { HTMLAttributes, PropsWithChildren, Ref } from 'react';
import { getClsPrefix } from '../../utils/prefix';
import './index.scss';

type ToolbarProps = HTMLAttributes<HTMLDivElement> & {};
export const Toolbar = React.forwardRef(
  (
    { className, ...props }: PropsWithChildren<ToolbarProps>,
    ref: Ref<HTMLDivElement> | undefined
  ) => {
    const newClassName = `${className ? `${className} ` : ''}${getClsPrefix(
      'Toolbar'
    )}`;
    return <div {...props} ref={ref} className={newClassName} />;
  }
);
