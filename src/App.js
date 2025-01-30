import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import PhoneInput from './components/PhoneInput';
import Chat from './components/Chat';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/phone" element={<PhoneInput />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </Router>
  );
}

export default App;