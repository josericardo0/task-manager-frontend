import React from 'react';
import { Button, ListItem as MuiListItem, ListItemText } from '@mui/material';

const Item = ({ item, onToggle, onEdit, onDelete, onPrioritize }) => {
  return (
    <MuiListItem style={{ backgroundColor: item.priority ? '#ffe0b2' : 'transparent' }}>
      <ListItemText
        primary={item.title}
        secondary={item.completed ? 'Concluído' : 'Pendente'}
        style={{ textDecoration: item.completed ? 'line-through' : 'none' }}
      />
      <Button variant="contained" color={item.completed ? 'secondary' : 'primary'} onClick={() => onToggle(item.id)}>
        {item.completed ? 'Marcar como não concluído' : 'Marcar como concluído'}
      </Button>
      <Button variant="outlined" onClick={() => onEdit(item)}>Editar</Button>
      <Button variant="outlined" color="error" onClick={() => onDelete(item.id)}>Excluir</Button>
      <Button variant="outlined" color={item.priority ? 'secondary' : 'primary'} onClick={() => onPrioritize(item.id)}>
        {item.priority ? 'Remover Prioridade' : 'Destacar Prioridade'}
      </Button>
    </MuiListItem>
  );
};

export default Item;
