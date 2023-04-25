import IconImage from 'common/assets/images/icon.png';
import { Heading } from 'components';

import * as S from './styles';

export default function Home() {
  return (
    <S.Container>
      <img src={IconImage} alt="Icon" />
      <Heading level={1}>Welcome to my React Architecture</Heading>
      <p>
        This project was created to be used as the basis for React applications.
        The architecture was designed aiming at the organization and scalability
        of the application, counting on the main libraries in the market. I
        wrote a post explaining this architecture better and you can read it by{' '}
        <a
          href="https://vinniciusgomes.medium.com/arquitetando-uma-aplica%C3%A7%C3%A3o-react-de-uma-forma-organizada-e-escal%C3%A1vel-4e4491e9bf39"
          target="_blank"
          rel="noreferrer"
        >
          clicking here.
        </a>{' '}
        Or you can see the code on{' '}
        <a
          href="https://github.com/vinniciusgomes/react-architecture"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        .
      </p>

      <S.CreatedBy>
        <span role="img" aria-label="heart">
          Created with ❤️ by{' '}
        </span>
        <a href="https://vinniciusgomes.dev" target="_blank" rel="noreferrer">
          Vinnicius Gomes
        </a>
      </S.CreatedBy>
    </S.Container>
  );
}
