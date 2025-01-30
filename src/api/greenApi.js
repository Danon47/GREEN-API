import axios from 'axios';

const idInstance = localStorage.getItem('idInstance');
const apiToken = localStorage.getItem('apiToken');

export const sendMessage = async (phoneNumber, message) => {
  try {
    const response = await axios.post(
      `https://api.green-api.com/waInstance${idInstance}/SendMessage/${apiToken}`,
      {
        chatId: `${phoneNumber}@c.us`,
        message: message,
      }
    );
    return response.data;
  } catch (error) {
    console.error('Ошибка отправки:', error);
    throw error;
  }
};

export const receiveMessages = async () => {
  try {
    const response = await axios.get(
      `https://api.green-api.com/waInstance${idInstance}/ReceiveNotification/${apiToken}`
    );
    console.log('Получены данные:', response.data);
    return response.data;
  } catch (error) {
    console.error('Ошибка получения:', error);
    throw error;
  }
};