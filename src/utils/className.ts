export const combineClassName = (...args: string[]): string | undefined => {
  const list = args.filter(Boolean);
  if (list?.length) {
    return list.join(' ');
  }
  return undefined;
};
