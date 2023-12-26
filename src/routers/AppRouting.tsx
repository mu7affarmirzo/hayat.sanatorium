import Layout from 'components/layout';
import { Navigate, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import LoginView from 'views/auth/LoginView';
import PrivateRoute from './privateRoute';
import ROUTES from './router';

export const MainContainer = styled.div`
    display: flex;
`;

const AppRouting = () => {
    const token = true;
    const isSignedIn = token;

    return (
        <>
            <Routes>
                <Route
                    path="*"
                    element={
                        <Navigate
                            to={isSignedIn ? 'dashboard' : 'login'}
                            replace
                        />
                    }
                />
                {!isSignedIn ? (
                    <Route path="/login" element={<LoginView />} />
                ) : (
                    <Route
                        path="dashboard"
                        element={
                            <PrivateRoute isSignedIn={isSignedIn}>
                                <Layout />
                            </PrivateRoute>
                        }
                    >
                        <Route
                            path="*"
                            index
                            element={
                                <Navigate to="/dashboard/booked" replace />
                            }
                        />
                        {ROUTES.dashboard.map((item) => {
                            return (
                                <Route key={item.name} path={item.name}>
                                    <Route
                                        path="*"
                                        index
                                        element={
                                            <Navigate
                                                to={`/dashboard/${`${item.name}/${item.defaultPath}`}`}
                                                replace
                                            />
                                        }
                                    />
                                    {item.paths.map((route) => {
                                        return (
                                            <Route
                                                path={route.path}
                                                key={item.name}
                                                element={<route.element />}
                                            />
                                        );
                                    })}
                                </Route>
                            );
                        })}
                    </Route>
                )}
            </Routes>
        </>
    );
};

export default AppRouting;
