import { memo } from 'react';

import { IHeadingProps } from './interfaces';
import * as S from './styles';

const Heading = ({
  children,
  level = 1,
  italic = false,
  bold = false,
}: IHeadingProps) => {
  return (
    <S.Heading level={level} italic={italic} bold={bold}>
      {children}
    </S.Heading>
  );
};

export default memo(Heading);
