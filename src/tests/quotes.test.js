import { render, waitFor } from '@testing-library/react';
import Quotes from '../pages/quotes';

describe('Quotes', () => {
  it('should render loading text initially', async () => {
    const { getByText } = render(<Quotes />);
    const loadingText = getByText('Loading...');
    expect(loadingText).toBeInTheDocument();
    await waitFor(() => {
    });
  });

  it('should render error text when API call fails', async () => {
    jest.spyOn(global, 'fetch').mockRejectedValue(new Error('Failed to fetch data'));
    const { getByText } = render(<Quotes />);
    const errorText = await waitFor(() => getByText('Failed to fetch data'));
    expect(errorText).toBeInTheDocument();
  });

  it('should render quote and author when API call succeeds', async () => {
    const mockData = [{ quote: 'Test quote', author: 'Test author' }];
    jest.spyOn(global, 'fetch').mockResolvedValue({
      ok: true,
      json: async () => mockData,
    });
    const { getByText } = render(<Quotes />);
    const quote = await waitFor(() => getByText('Test quote'));
    const author = await waitFor(() => getByText('Test author'));
    expect(quote).toBeInTheDocument();
    expect(author).toBeInTheDocument();
  });
});
