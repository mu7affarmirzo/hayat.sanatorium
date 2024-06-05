import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRouting from 'routers/AppRouting';
import { ModalsProvider } from 'components/Modals';

function App() {
  return (
    <ModalsProvider>
      <BrowserRouter>
        <AppRouting />
      </BrowserRouter>
    </ModalsProvider>
  );
}

export default App;
