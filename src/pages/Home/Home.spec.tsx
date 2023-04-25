import { render, screen } from '@testing-library/react';

import Home from './';

describe('<Home />', () => {
  it('should render', () => {
    render(<Home />);
    expect(
      screen.getByText(/Welcome to my React Architecture/i),
    ).toBeInTheDocument();
  });
});
