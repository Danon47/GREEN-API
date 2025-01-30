import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, TextField, Button, Typography, Container } from '@mui/material';

const Login = () => {
  const [idInstance, setIdInstance] = useState('');
  const [apiToken, setApiToken] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('idInstance', idInstance);
    localStorage.setItem('apiToken', apiToken);
    navigate('/phone');
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        bgcolor: '#f0f2f5',
        p: 3,
      }}
    >
      <Box
        sx={{
          bgcolor: 'white',
          borderRadius: 3,
          p: 4,
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        }}
      >
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h4" sx={{ color: '#00a884', fontWeight: 'bold' }}>
          Test Case
          </Typography>
          <Typography variant="subtitle1" sx={{ color: '#667781', mt: 1 }}>
            Введите данные GREEN-API
          </Typography>
        </Box>

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="ID Instance"
            variant="outlined"
            value={idInstance}
            onChange={(e) => setIdInstance(e.target.value)}
            sx={{
              mb: 2,
              '& .MuiOutlinedInput-root': {
                borderRadius: '20px',
                '& fieldset': {
                  borderColor: '#e9edef',
                },
              },
            }}
          />

          <TextField
            fullWidth
            label="API Token"
            variant="outlined"
            value={apiToken}
            onChange={(e) => setApiToken(e.target.value)}
            sx={{
              mb: 3,
              '& .MuiOutlinedInput-root': {
                borderRadius: '20px',
                '& fieldset': {
                  borderColor: '#e9edef',
                },
              },
            }}
          />

          <Button
            fullWidth
            variant="contained"
            type="submit"
            sx={{
              bgcolor: '#00a884',
              borderRadius: '20px',
              textTransform: 'none',
              py: 1.5,
              '&:hover': {
                bgcolor: '#008f72',
              },
            }}
          >
            Продолжить
          </Button>
        </form>
      </Box>

      <Typography variant="body2" sx={{ color: '#667781', mt: 4, textAlign: 'center' }}>
        Данные можно получить в личном кабинете GREEN-API
      </Typography>
    </Container>
  );
};

export default Login;