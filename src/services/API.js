import 'react-toastify/dist/ReactToastify.css'; 
import { toast } from 'react-toastify'; 

const API_URL = 'https://api.example.com';

const tratarErros = async (response) => {
  if (!response.ok) {
    const textoErro = await response.text();
    throw new Error(`HTTP error! Status: ${response.status}, Message: ${textoErro}`);
  }
  return response;
};

export const retornarListaItens = async (listId) => {
  try {
    const response = await fetch(`${API_URL}/lists/${listId}/items`);
    await tratarErros(response);
    return response.json();
  } catch (error) {
    console.error('Falha em buscar os itens da lista:', error);
    
    toast.error('Houve uma falha em carregar os itens da lista. Por favor tente novamente.');
    return []; 
  }
};

export const atualizarItem = async (itemId, data) => {
  try {
    const response = await fetch(`${API_URL}/items/${itemId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    await tratarErros(response);
  } catch (error) {
    console.error('Falha em atualizar o item: ', error);
    toast.error('Houve uma falha ao atualizar o item. Por favor tente novamente.');
  }
};

export const deletarItem = async (itemId) => {
  try {
    const response = await fetch(`${API_URL}/items/${itemId}`, { method: 'DELETE' });
    await tratarErros(response);
  } catch (error) {
    console.error('Falha em deletar o item: ', error);
    toast.error('Houve uma falha ao deletar o item. Por favor tente novamente.');
  }
};

export const priorizarItem = async (itemId, data) => {
  try {
    const response = await fetch(`${API_URL}/items/${itemId}/prioritize`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    await tratarErros(response);
  } catch (error) {
    console.error('Falha em priorizar o item:', error);
    toast.error('A priorização do item falhou. Por favor tente novamente.');
  }
};
