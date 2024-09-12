import React from 'react';
import { List as MuiList, ListItem as MuiListItem, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const List = ({ lists, onSelect }) => {
  const navigate = useNavigate();

  const handleSelect = (list) => {
    navigate(`/lists/${list.id}`);
  };

  return (
    <MuiList>
      {lists.map(list => (
        <MuiListItem button key={list.id} onClick={() => handleSelect(list)}>
          <ListItemText primary={list.name} />
        </MuiListItem>
      ))}
    </MuiList>
  );
};

export default List;
