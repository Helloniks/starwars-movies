// MovieDetail.test.tsx
import { render, screen } from '@testing-library/react';
import MovieDetail from './MovieDetail';  // Import the component
import '@testing-library/jest-dom';  // For additional matchers like toBeInTheDocument

describe('MovieDetail', () => {
  const mockMovie = {
    title: 'Star Wars: Episode IV - A New Hope',
    episode_id: 1,
    release_date: '1977-05-25',
    opening_crawl: 'It is a period of civil war...',
  };

  it('renders movie details correctly', () => {
    // Render the MovieDetail component with the mock movie data
    render(<MovieDetail);

    // Check if the title is rendered
    expect(screen.getByText(mockMovie.title)).toBeInTheDocument();

    // Check if the episode_id is rendered
    expect(screen.getByText(`Episode ID: ${mockMovie.episode_id}`)).toBeInTheDocument();

    // Check if the release date is rendered
    expect(screen.getByText(`Release Date: ${mockMovie.release_date}`)).toBeInTheDocument();

    // Check if the opening crawl text is rendered
    expect(screen.getByText(mockMovie.opening_crawl)).toBeInTheDocument();

    // Check if the image has the correct src attribute
    const movieImage = screen.getByAltText(mockMovie.title);
    expect(movieImage).toHaveAttribute(
      'src',
      `https://starwars-visualguide.com/assets/img/films/${mockMovie.episode_id}.jpg`
    );
  });
});
