import React, { createContext, useState } from 'react';

const ListContext = createContext();

export const ListProvider = ({ children }) => {
  const [lists, setLists] = useState([]);

  const addList = (list) => setLists([...lists, list]);
  const updateList = (updatedList) => setLists(lists.map(list => list.id === updatedList.id ? updatedList : list));
  const deleteList = (id) => setLists(lists.filter(list => list.id !== id));

  const addItemToList = (listId, item) => {
    const updatedLists = lists.map(list => {
      if (list.id === listId) {
        return { ...list, items: [...list.items, item] };
      }
      return list;
    });
    setLists(updatedLists);
  };

  const updateItemInList = (listId, updatedItem) => {
    const updatedLists = lists.map(list => {
      if (list.id === listId) {
        return {
          ...list,
          items: list.items.map(item => item.id === updatedItem.id ? updatedItem : item)
        };
      }
      return list;
    });
    setLists(updatedLists);
  };

  const deleteItemFromList = (listId, itemId) => {
    const updatedLists = lists.map(list => {
      if (list.id === listId) {
        return {
          ...list,
          items: list.items.filter(item => item.id !== itemId)
        };
      }
      return list;
    });
    setLists(updatedLists);
  };

  return (
    <ListContext.Provider value={{ lists, addList, updateList, deleteList, addItemToList, updateItemInList, deleteItemFromList }}>
      {children}
    </ListContext.Provider>
  );
};

export const useListContext = () => useContext(ListContext);
