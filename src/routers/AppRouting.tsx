/* eslint-disable react-hooks/exhaustive-deps */
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useReduxSelector } from "hooks/useReduxHook";
import React, { useCallback, useEffect, useState } from "react";
import { RoutingData } from "./router";
import Headers from "components/Header/header";

export const MainContainer = styled.div`
    display: flex;
`;

type Props = {
    role: "NoAuth" | "Reception" | "Doctors" | "404";
};

const AppRouting = () => {
    const navigate = useNavigate();
    const [role, setRole] = useState<Props["role"]>("NoAuth");
    const [changeTopTab, setChangeTopTab] = React.useState<number>(0);

    const { isAuthenticated } = useReduxSelector(
        (loginState) => loginState.auth
    );

    useEffect(() => {
        if (isAuthenticated) {
            setRole("Reception");
            navigate("reception", { replace: true });
        } else {
            setRole("NoAuth");
            navigate("login", { replace: true });
        }
    }, [isAuthenticated]);

    const changeHeaderTab = useCallback((index: number) => {
        setChangeTopTab(index);
    }, []);

    return (
        <>
            {role !== "NoAuth" ? (
                <>
                    <Headers
                        activeTab={changeTopTab}
                        setChangeTopTab={changeHeaderTab}
                    />
                    <MainContainer className=" overflow-hidden relative max-h-[calc(100vh-76px)] p-2">
                        <div className="w-[100%] h-full">
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
