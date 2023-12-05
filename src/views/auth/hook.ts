import { useCallback, useEffect, useState } from 'react';

import { useNavigate, Navigate } from 'react-router-dom';

const useLoginHook = () => {
    const navigate = useNavigate();
    const [values, setValues] = useState<any>({
        email: '',
        password: '',
        showPassword: false,
        isLoginValid: null,
        isPasswordValid: null,
        rememberMe: false,
    });

    const handleChange =
        (prop: keyof any) => (event: React.ChangeEvent<HTMLInputElement>) => {
            setValues({ ...values, [prop]: event.target.value });
        };

    const checkInput = (
        event: React.ChangeEvent<HTMLInputElement>,
        type: string
    ) => {
        let value: string = event.target.value;
        if (type === 'login') {
            setValues({ ...values, isLoginValid: value.length > 3 });
        } else if (type === 'password') {
            setValues({ ...values, isPasswordValid: value.length > 3 });
        }
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        event.preventDefault();
    };

    return {
        handleChange,

        values,
        checkInput,

        handleClickShowPassword,
        handleMouseDownPassword,
    };
};

export default useLoginHook;
