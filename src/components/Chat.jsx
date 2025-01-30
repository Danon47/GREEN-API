import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Typography, Box, IconButton } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { sendMessage, receiveMessages } from '../api/greenApi';
import Message from './Message';

const Chat = () => {
  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const phoneNumber = localStorage.getItem('phoneNumber');
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const data = await receiveMessages();
        if (data) {
          const messageData = data.body.messageData;
          if (messageData?.textMessageData) {
            const message = messageData.textMessageData.textMessage;
            setMessages(prev => [...prev, { text: message, isMy: false }]);
          }
        }
      } catch (error) {
        console.error('Ошибка при получении сообщений:', error);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    if (window.confirm('Вы уверены, что хотите выйти?')) {
      localStorage.removeItem('idInstance');
      localStorage.removeItem('apiToken');
      localStorage.removeItem('phoneNumber');
      
      navigate('/');
    }
  };

  const handleSend = async () => {
    if (!newMessage) {
      alert('Введите сообщение!');
      return;
    }

    try {
      await sendMessage(phoneNumber, newMessage);
      setMessages(prev => [...prev, { text: newMessage, isMy: true }]);
      setNewMessage('');
    } catch (error) {
      console.error('Ошибка отправки:', error);
      alert('Не удалось отправить сообщение. Проверьте данные и попробуйте снова.');
    }
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        p: 0,
        bgcolor: '#f0f2f5',
      }}
    >
      <Box
        sx={{
          bgcolor: '#00a884',
          color: 'white',
          p: 2,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          Чат с {phoneNumber}
        </Typography>
        
        <IconButton
          onClick={handleLogout}
          sx={{
            color: 'white',
            '&:hover': {
              bgcolor: 'rgba(255,255,255,0.1)'
            }
          }}
        >
          <ExitToAppIcon />
        </IconButton>
      </Box>

      <Box
        sx={{
          flex: 1,
          overflowY: 'auto',
          p: 2,
          bgcolor: '#efeae2',
          backgroundImage: 'url("https://web.whatsapp.com/img/bg-chat-tile-light_686b98c9fdffef3f63127759e2057750.png")',
        }}
      >
        {messages.map((msg, index) => (
          <Message key={index} text={msg.text} isMy={msg.isMy} />
        ))}
      </Box>

      <Box
        sx={{
          bgcolor: '#f0f2f5',
          p: 2,
          display: 'flex',
          gap: 1,
          alignItems: 'center',
        }}
      >
        <TextField
          fullWidth
          variant="outlined"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Введите сообщение"
          sx={{
            bgcolor: 'white',
            borderRadius: 6,
            '& .MuiOutlinedInput-root': {
              borderRadius: 6,
            },
          }}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSend}
          sx={{
            borderRadius: '50%',
            minWidth: 40,
            height: 40,
            bgcolor: '#00a884',
            '&:hover': {
              bgcolor: '#008f72',
            },
          }}
        >
          ➤
        </Button>
      </Box>
    </Container>
  );
};

export default Chat;