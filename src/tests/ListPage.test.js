import { render, screen } from '@testing-library/react';
import ListPage from '../pages/ListPage';
import { ListProvider } from '../contexts/ListContext';

test('renders list items', () => {
  const mockLists = [{ id: '1', name: 'Lista Teste' }];
  jest.mock('../contexts/ListContext', () => ({
    useList: () => ({ lists: mockLists }),
  }));

  render(
    <ListProvider>
      <ListPage />
    </ListProvider>
  );

  expect(screen.getByText('Lista Teste')).toBeInTheDocument();
});
