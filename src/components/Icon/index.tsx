import React, { FC } from 'react';
import './styles.scss';

import { getClsPrefix } from '../../utils/prefix';

interface IconFontProps {
  type: string;
}

export const RichIcon: FC<IconFontProps> = (props) => {
  const { type } = props;
  return (
    <svg aria-hidden="true" className={`${getClsPrefix('Icon')}`}>
      <use xlinkHref={`#${type}`} />
    </svg>
  );
};
