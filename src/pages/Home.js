import React, { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import { getLists } from '../services/api';
import List from '../components/List';

const Home = () => {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    const fetchLists = async () => {
      const data = await getLists();
      setLists(data);
    };
    fetchLists();
  }, []);

  return (
    <Container>
      <Typography variant="h1">Gerenciador de Tarefas</Typography>
      <List lists={lists} />
    </Container>
  );
};

export default Home;
