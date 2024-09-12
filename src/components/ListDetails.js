import React, { useState, useEffect } from 'react';
import { getListItems, updateItem, deleteItem, prioritizeItem } from '../services/API';
import Item from '../components/Item';
import ItemForm from '../components/ItemForm';

const ListDetails = ({ match }) => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const listId = match.params.id;

  useEffect(() => {
    const fetchItems = async () => {
      const data = await getListItems(listId);
      setItems(data);
    };
    fetchItems();
  }, [listId]);

  const handleToggle = async (itemId) => {
    const updatedItems = items.map(item =>
      item.id === itemId ? { ...item, completed: !item.completed } : item
    );
    setItems(updatedItems);
    await updateItem(itemId, { completed: !items.find(item => item.id === itemId).completed });
  };

  const handleEdit = (item) => {
    setSelectedItem(item);
    setIsFormOpen(true);
  };

  const handleDelete = async (itemId) => {
    const updatedItems = items.filter(item => item.id !== itemId);
    setItems(updatedItems);
    await deleteItem(itemId);
  };

  const handlePrioritize = async (itemId) => {
    const item = items.find(item => item.id === itemId);
    const updatedItems = items.map(i =>
      i.id === itemId ? { ...i, priority: i.priority === 0 ? 1 : 0 } : i
    );
    setItems(updatedItems);
    await prioritizeItem(itemId, { priority: item.priority === 0 ? 1 : 0 });
  };

  const handleSave = async (updatedItem) => {
    const updatedItems = items.map(item =>
      item.id === updatedItem.id ? updatedItem : item
    );
    setItems(updatedItems);
    setIsFormOpen(false);
    await updateItem(updatedItem.id, updatedItem);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    setSelectedItem(null);
  };

  const sortedItems = [...items].sort((a, b) => b.priority - a.priority);

  return (
    <div>
      <h2>Detalhes da Lista</h2>
      {sortedItems.map(item => (
        <Item
          key={item.id}
          item={item}
          onToggle={() => handleToggle(item.id)}
          onEdit={() => handleEdit(item)}
          onDelete={() => handleDelete(item.id)}
          onPrioritize={() => handlePrioritize(item.id)}
        />
      ))}
      {isFormOpen && (
        <ItemForm
          open={isFormOpen}
          item={selectedItem}
          onClose={handleCloseForm}
          onSave={handleSave}
        />
      )}
    </div>
  );
};

export default ListDetails;
