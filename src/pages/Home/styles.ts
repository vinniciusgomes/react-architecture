import { font, primaryColors, breakpoints } from 'styles/theme';
import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  max-width: 110rem;
  margin: 0 auto;

  img {
    width: 15rem;
    margin-bottom: 2.7rem;

    @media (max-width: ${breakpoints.medium}) {
      width: 10rem;
    }
  }

  p {
    text-align: center;
    margin-top: 3rem;
    font-size: 2rem;
    font-weight: ${font.light};
    line-height: ${font.lineHeight.xxsmall};

    @media (max-width: ${breakpoints.medium}) {
      font-size: 1.6rem;
    }
  }

  a {
    text-decoration: none;
    color: ${primaryColors.black};
    font-weight: ${font.semiBold};
    font-size: 1.8rem;
    line-height: ${font.lineHeight.xxsmall};

    @media (max-width: ${breakpoints.medium}) {
      font-size: 1.5rem;
    }
  }

  @media (max-width: ${breakpoints.medium}) {
    padding: 2.4rem;

    h1 {
      font-size: ${font.sizes.heading04};
      text-align: center;
    }
  }
`;

export const CreatedBy = styled.div`
  margin-top: 2.7rem;

  span {
    font-size: 1.4rem;
  }

  a {
    text-decoration: none;
    font-size: 1.4rem;
  }

  @media (max-width: ${breakpoints.medium}) {
    margin-top: 3rem;
  }
`;
