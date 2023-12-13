import React, { useCallback, useEffect } from 'react';
import { RoutingData } from './config';
import { Navigate, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Header from 'components/header/header';

export const MainContainer = styled.div`
    display: flex;
`;

const AppRouting = () => {
    const token = true;
    const [changeTopTab, setChangeTopTab] = React.useState<number>(0);
    const [role, setChangeRole] = React.useState<string>('NoAuth');

    const changeHeaderTab = useCallback((index: number) => {
        setChangeTopTab(index);
    }, []);

    const logOutHandler = useCallback(() => {
        setChangeRole(token ? 'Admin' : 'NoAuth');
        if (!RoutingData[role]) {
            throw new Error(`This type "${role}" of role is not defined `);
        }
    }, [token, role]);

    useEffect(() => {
        logOutHandler();
    }, [logOutHandler]);

    return (
        <>
            {role !== 'NoAuth' ? (
                <>
                    <Header
                        setChangeTopTab={changeHeaderTab}
                        activeTab={changeTopTab}
                    />
                    <MainContainer className="overflow-hidden relative min-h-[calc(100vh-76px)] ">
                        <div className="w-[100vw] h-full ">
                            <Routes>
                                {RoutingData[role].map((item, i) => {
                                    return (
                                        <React.Fragment key={i}>
                                            <Route
                                                key={i}
                                                path={item.path}
                                                element={item.component}
                                            >
                                                {item?.paths?.map(
                                                    (
                                                        route: any,
                                                        index: number
                                                    ) => {
                                                        return (
                                                            <Route
                                                                path={
                                                                    route?.path
                                                                }
                                                                key={index.toString()}
                                                                element={
                                                                    <route.element />
                                                                }
                                                            />
                                                        );
                                                    }
                                                )}
                                            </Route>

                                            {item.global && (
                                                <Route
                                                    path="*"
                                                    element={
                                                        <Navigate
                                                            to={item.path}
                                                            replace
                                                        />
                                                    }
                                                />
                                            )}
                                        </React.Fragment>
                                    );
                                })}
                            </Routes>
                        </div>
                    </MainContainer>
                </>
            ) : (
                <Routes>
                    {RoutingData[role].map((item, i) => {
                        return (
                            <React.Fragment key={i}>
                                <Route
                                    key={i}
                                    path={item.path}
                                    element={item.component}
                                />
                                {item.global && (
                                    <Route
                                        path="*"
                                        element={
                                            <Navigate to={item.path} replace />
                                        }
                                    />
                                )}
                            </React.Fragment>
                        );
                    })}
                </Routes>
            )}
        </>
    );
};

export default AppRouting;
