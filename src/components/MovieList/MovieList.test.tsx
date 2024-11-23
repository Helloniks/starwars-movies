import { render, screen, fireEvent } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import MovieList from './MovieList';
import '@testing-library/jest-dom';


jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe('MovieList Component', () => {
  let dispatchMock: jest.Mock;

  const mockMovies = [
    {
      episode_id: 1,
      title: 'A New Hope',
      rating: '8.6',
      release_date: '1977-05-25',
    },
    {
      episode_id: 2,
      title: 'The Empire Strikes Back',
      rating: '8.7',
      release_date: '1980-05-21',
    },
  ];

  const mockSelectedMovie = mockMovies[0];

  beforeEach(() => {

    dispatchMock = jest.fn();
    (useDispatch as unknown as jest.Mock).mockReturnValue(dispatchMock);
  });

  it('renders the movie list correctly', () => {

    (useSelector as unknown as jest.Mock).mockReturnValue(mockMovies);

    render(<MovieList />);


    expect(screen.getByText('A New Hope')).toBeInTheDocument();
    expect(screen.getByText('The Empire Strikes Back')).toBeInTheDocument();
  });

  it('dispatches SELECT_MOVIE when a movie is clicked', () => {

    (useSelector as unknown as jest.Mock).mockReturnValue(mockMovies);

    render(<MovieList />);


    const movieCard = screen.getByText('A New Hope').closest('div');
    fireEvent.click(movieCard!);


    expect(dispatchMock).toHaveBeenCalledWith({
      type: 'SELECT_MOVIE',
      payload: mockMovies[0],
    });
  });

  it('displays movie details when a movie is selected', () => {

    (useSelector as unknown as jest.Mock)
      .mockReturnValueOnce(mockMovies) 
      .mockReturnValueOnce(mockSelectedMovie); 

    render(<MovieList />);


    const movieCard = screen.getByText('A New Hope').closest('div');
    fireEvent.click(movieCard!);

    expect(screen.getByText('A New Hope')).toBeInTheDocument();
    expect(screen.getByText('Episode 1')).toBeInTheDocument(); 
    expect(screen.getByText('Rating: 8.6')).toBeInTheDocument(); 
  });

  it('shows a message when no movie is selected', () => {

    (useSelector as unknown as jest.Mock).mockReturnValueOnce(mockMovies).mockReturnValueOnce(null);

    render(<MovieList />);

    expect(screen.getByText('Select a movie to see the details')).toBeInTheDocument();
  });
});
