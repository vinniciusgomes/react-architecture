import { PropsWithChildren } from 'react';

export type IHeadingProps = PropsWithChildren<{
  bold?: boolean;
  italic?: boolean;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}>;
