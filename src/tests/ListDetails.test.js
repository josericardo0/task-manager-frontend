import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ListDetails from '../components/ListDetails';
import { ListProvider } from '../contexts/ListContext';
import { retornarListaItens, atualizarItem, deletarItem, priorizarItem, retornarListaItens } from '../services/API';

jest.mock('../services/API');

test('handles item interactions', async () => {
  const mockItems = [{ id: '1', title: 'Item Teste', completed: false, priority: false }];
  retornarListaItens.mockResolvedValue(mockItems);

  render(
    <ListProvider>
      <ListDetails match={{ params: { id: '1' } }} />
    </ListProvider>
  );

  expect(screen.getByText('Item Teste')).toBeInTheDocument();

  atualizarItem.mockResolvedValue();
  fireEvent.click(screen.getByText('Atualizar')); 
  await waitFor(() => expect(atualizarItem).toHaveBeenCalled());

  deletarItem.mockResolvedValue();
  fireEvent.click(screen.getByText('Deletar')); 
  await waitFor(() => expect(deletarItem).toHaveBeenCalled());

  priorizarItem.mockResolvedValue();
  fireEvent.click(screen.getByText('Priorizar')); 
  await waitFor(() => expect(priorizarItem).toHaveBeenCalled());
});
