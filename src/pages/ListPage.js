import React from 'react';
import { useListContext } from '../contexts/ListContext'; 
import Item from '../components/Item';  

const ListPage = () => {
  const { lists } = useListContext(); 

  return (
    <div>
      <h1>My Lists</h1>
      {lists.map(list => (
        <Item key={list.id} list={list} />
      ))}
    </div>
  );
};

export default ListPage;
