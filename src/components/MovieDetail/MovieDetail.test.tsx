// MovieDetail.test.tsx
import { render, screen } from '@testing-library/react';
import MovieDetail from './MovieDetail'; 
import '@testing-library/jest-dom';  

describe('MovieDetail', () => {
  const mockMovie = {
    title: 'Star Wars: Episode IV - A New Hope',
    episode_id: 1,
    release_date: '1977-05-25',
    opening_crawl: 'It is a period of civil war...',
  };

  it('renders movie details correctly', () => {

    render(<MovieDetail movie={mockMovie} />);

    expect(screen.getByText(mockMovie.title)).toBeInTheDocument();

    expect(screen.getByText(`Episode ID: ${mockMovie.episode_id}`)).toBeInTheDocument();

    expect(screen.getByText(`Release Date: ${mockMovie.release_date}`)).toBeInTheDocument();


    expect(screen.getByText(mockMovie.opening_crawl)).toBeInTheDocument();


    const movieImage = screen.getByAltText(mockMovie.title);
    expect(movieImage).toHaveAttribute(
      'src',
      `https://starwars-visualguide.com/assets/img/films/${mockMovie.episode_id}.jpg`
    );
  });
});
