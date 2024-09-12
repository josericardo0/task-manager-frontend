import React, { useState, useEffect } from 'react';
import { getListItems, updateItem } from '../services/API';
import ListItem from '../components/ListForm';

const ListDetails = ({ match }) => {
  const listId = match.params.id;
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const data = await getListItems(listId);
      setItems(data);
    };
    fetchItems();
  }, [listId]);

  const handleToggle = async (itemId) => {
    const item = items.find(item => item.id === itemId);
    await updateItem(listId, itemId, { ...item, completed: !item.completed });
    setItems(items.map(item => (item.id === itemId ? { ...item, completed: !item.completed } : item)));
  };

  return (
    <div>
      <h2>Itens da Lista</h2>
      {items.map(item => (
        <ListItem key={item.id} item={item} onToggle={handleToggle} />
      ))}
    </div>
  );
};

export default ListDetails;
