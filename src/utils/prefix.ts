import { EDITOR_CLASS_PREFIX } from '../constants/common';

/** 获取类名前缀 */
export const getClsPrefix = (nameSpace: string) => {
  return `${EDITOR_CLASS_PREFIX}${nameSpace}`;
};
