import Themes from '../../../themes.json';

export const open = async (
  args: string[],
  callback?: (value: string) => string,
): Promise<string> => {
  if (args.length === 0) {
    return `Usage: open [arg]
Args:
  - tools: it-tools
  - easymock: easymock
  - nextjs: nextjs demo
  - memos: memos

Example: 
  open tools # window open it-tools
  open easymock # window open it-tools`;
  }
  let url = 'http://192.168.31.208:';

  switch (args[0]) {
    case 'tools':
      window.open(url + `40116`);
      return `opening it-tools`;
    case 'easymock':
      window.open(url + `7300`);
      return `opening easymock`;
    case 'nextjs':
      window.open(url + `3210`);
      return `opening nextjs`;
    case 'memos':
      window.open(url + `5230`);
      return `opening memos`;
  }
};
