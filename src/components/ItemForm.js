import React, { useState, useEffect } from 'react';
import { TextField, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControlLabel, Checkbox, FormHelperText } from '@mui/material';

const ItemForm = ({ open, onClose, onSave, item }) => {
  const [title, setTitle] = useState('');
  const [completed, setCompleted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (item) {
      setTitle(item.title);
      setCompleted(item.completed);
    } else {
      setTitle('');
      setCompleted(false);
    }
  }, [item]);

  const handleSave = () => {
    if (title.trim().length < 3) {
      setError('O título deve ter pelo menos 3 caracteres.');
      return;
    }
    onSave({ ...item, title, completed });
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{item ? 'Editar Item' : 'Adicionar Item'}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Título do Item"
          type="text"
          fullWidth
          variant="outlined"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            setError('');
          }}
        />
        {error && <FormHelperText error>{error}</FormHelperText>}
        <FormControlLabel
          control={<Checkbox checked={completed} onChange={(e) => setCompleted(e.target.checked)} />}
          label="Concluído"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancelar</Button>
        <Button onClick={handleSave}>Salvar</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ItemForm;
