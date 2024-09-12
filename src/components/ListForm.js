// src/components/ListForm.js
import React, { useState, useEffect } from 'react';
import { TextField, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

const ListForm = ({ open, onClose, onSave, list }) => {
  const [name, setName] = useState('');

  useEffect(() => {
    if (list) {
      setName(list.name);
    } else {
      setName('');
    }
  }, [list]);

  const handleSave = () => {
    if (name.trim().length < 3) {
      alert('O nome da lista deve ter pelo menos 3 caracteres.');
      return;
    }
    onSave({ ...list, name });
    onClose();
  };

  

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{list ? 'Editar Lista' : 'Criar Lista'}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Nome da Lista"
          type="text"
          fullWidth
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancelar</Button>
        <Button onClick={handleSave}>Salvar</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ListForm;
