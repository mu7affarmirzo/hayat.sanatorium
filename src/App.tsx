import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRouting from 'routers/AppRouting';

function App() {
    return (
        <BrowserRouter>
            <AppRouting />
        </BrowserRouter>
    );
}

export default App;
