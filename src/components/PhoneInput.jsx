import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, TextField, Button, Typography, Container } from '@mui/material';

const PhoneInput = () => {
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('phoneNumber', phone);
    navigate('/chat');
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
            Введите номер получателя
          </Typography>
        </Box>

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Номер телефона"
            variant="outlined"
            placeholder="79991234567"
            value={phone}
            onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
            sx={{
              mb: 3,
              '& .MuiOutlinedInput-root': {
                borderRadius: '20px',
                '& fieldset': {
                  borderColor: '#e9edef',
                },
              },
            }}
            inputProps={{
              pattern: '^7\\d{10}$',
              title: 'Формат: 79991234567',
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
            Начать чат
          </Button>
        </form>
      </Box>

      <Typography variant="body2" sx={{ color: '#667781', mt: 4, textAlign: 'center' }}>
        Номер должен быть в международном формате без +
      </Typography>
    </Container>
  );
};

export default PhoneInput;