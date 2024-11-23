import { render, screen, fireEvent } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import MovieFilter from './MovieFilter';
import '@testing-library/jest-dom';


jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

describe('MovieFilter Component', () => {
  let dispatchMock: jest.Mock;

  beforeEach(() => {
    dispatchMock = useDispatch() as jest.Mock; // Create a mock of the dispatch function
  });

  it('renders the filter and sort inputs correctly', () => {
    render(<MovieFilter />);

    expect(screen.getByLabelText('Sort by Episode')).toBeInTheDocument();
    expect(screen.getByLabelText('Sort by Title')).toBeInTheDocument();
    expect(screen.getByLabelText('Sort by Release Date')).toBeInTheDocument();

    expect(screen.getByPlaceholderText('Filter by movie name...')).toBeInTheDocument();
  });

  it('dispatches SORT_MOVIES action when a sort option is selected', () => {
    render(<MovieFilter />);

    const selectElement = screen.getByRole('combobox'); // Get the select element

  
    fireEvent.change(selectElement, { target: { value: 'release_date' } });


    expect(dispatchMock).toHaveBeenCalledWith({
      type: 'SORT_MOVIES',
      payload: 'release_date',
    });
  });

  it('dispatches FETCH_MOVIES action when filter input is cleared', () => {
    render(<MovieFilter />);

    const inputElement = screen.getByPlaceholderText('Filter by movie name...');


    fireEvent.change(inputElement, { target: { value: 'star' } });
    expect(dispatchMock).toHaveBeenCalledWith({
      type: 'FILTER_MOVIES',
      payload: 'star',
    });

    fireEvent.change(inputElement, { target: { value: '' } });
    expect(dispatchMock).toHaveBeenCalledWith({
      type: 'FETCH_MOVIES',
    });
  });

  it('dispatches FILTER_MOVIES action when filter input changes', () => {
    render(<MovieFilter />);

    const inputElement = screen.getByPlaceholderText('Filter by movie name...');


    fireEvent.change(inputElement, { target: { value: 'star' } });


    expect(dispatchMock).toHaveBeenCalledWith({
      type: 'FILTER_MOVIES',
      payload: 'star',
    });
  });
});
