import { render, screen, fireEvent } from '@testing-library/react';
import MovieSort from './MovieSort';
import '@testing-library/jest-dom';

describe('MovieSort Component', () => {
  let onSortChangeMock: jest.Mock;

  beforeEach(() => {
    onSortChangeMock = jest.fn();
  });

  it('renders the MovieSort component with options', () => {
    render(<MovieSort sortCriterion="episode_id" onSortChange={onSortChangeMock} />);

    expect(screen.getByText('Sort by:')).toBeInTheDocument();


    expect(screen.getByLabelText('Sort by:')).toBeInTheDocument();
    const selectElement = screen.getByLabelText('Sort by:');
    expect(selectElement).toHaveValue('episode_id');
    expect(screen.getByText('Episode ID')).toBeInTheDocument();
    expect(screen.getByText('Title')).toBeInTheDocument();
  });

  it('calls onSortChange when the sort criterion changes', () => {
    render(<MovieSort sortCriterion="episode_id" onSortChange={onSortChangeMock} />);

    const selectElement = screen.getByLabelText('Sort by:');
 
    fireEvent.change(selectElement, { target: { value: 'title' } });

 
    expect(onSortChangeMock).toHaveBeenCalledTimes(1);
    expect(onSortChangeMock).toHaveBeenCalledWith(expect.objectContaining({ target: { value: 'title' } }));
  });

  it('renders the correct sort criterion passed as a prop', () => {
    render(<MovieSort sortCriterion="title" onSortChange={onSortChangeMock} />);


    const selectElement = screen.getByLabelText('Sort by:');
    expect(selectElement).toHaveValue('title');
  });
});
