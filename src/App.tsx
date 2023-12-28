import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRouting from 'routers/AppRouting';
import { ModalsProvider } from 'components/Modals';
import { Suspense } from 'react';
import { CircularProgress } from '@mui/material';
const loading = () => {
    <CircularProgress color="secondary" />;
};

function App() {
    return (
        <ModalsProvider>
            <BrowserRouter>
                <AppRouting />
                {/* <Suspense fallback={<Loader />}>
                    <AppRouting />
                </Suspense> */}
            </BrowserRouter>
        </ModalsProvider>
    );
}

export default App;
