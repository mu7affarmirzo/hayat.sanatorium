import {
    Box,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormHelperText,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    Link,
    OutlinedInput,
    Typography,
} from '@mui/material';
import { Item } from '../../themes/customItems';
import {
    CloseOutlined,
    ErrorOutlineOutlined,
    Visibility,
    VisibilityOff,
} from '@mui/icons-material';
import loginPhoto from '../../assets/images/LogoPng.png';

import { Image } from './styles';
import LoadingButton from 'components/loadingButton';
import useLoginHook from './hook';

const LoginView = () => {
    const {
        values,
        checkInput,

        handleChange,
        handleClickShowPassword,
    } = useLoginHook();

    const isError = false;

    return (
        <>
            <Grid container spacing={0}>
                <Grid item xl={7} height={'100%'} width={'calc(100% - 800px)'}>
                    <Item height="100vh">
                        <Box
                            sx={{
                                width: '581px',
                            }}
                        >
                            <Typography
                                variant={'inherit'}
                                component="div"
                                className="text-center , font-light , text-4xl , leading-normal ,text-black ,mb-8 "
                            >
                                Вход в систему Госпиталь
                                <Typography
                                    variant={'inherit'}
                                    component="span"
                                    className="text-red-600 , text-2xl , uppercase , font-bold , leading-normal , block"
                                >
                                    Hayat Medical Center
                                </Typography>
                            </Typography>

                            <FormGroup>
                                <FormControl
                                    error={values.isLoginValid === false}
                                    className="w-full , mb-7 , mt-4"
                                    variant="outlined"
                                >
                                    <InputLabel>Логин</InputLabel>
                                    <OutlinedInput
                                        type="text"
                                        label="Логин"
                                        value={values.email}
                                        onChange={handleChange('email')}
                                        onBlur={(e: any) =>
                                            checkInput(e, 'login')
                                        }
                                    />
                                    {values.isLoginValid === false && (
                                        <FormHelperText error>
                                            Ведите более трех символов
                                        </FormHelperText>
                                    )}
                                </FormControl>

                                <FormControl
                                    error={values.isPasswordValid === false}
                                    className="w-full , mb-7 "
                                    variant="outlined"
                                >
                                    <InputLabel htmlFor="outlined-adornment-password">
                                        Пароль
                                    </InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        onChange={handleChange('password')}
                                        onBlur={(e: any) =>
                                            checkInput(e, 'password')
                                        }
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={
                                                        handleClickShowPassword
                                                    }
                                                    onMouseDown={
                                                        handleClickShowPassword
                                                    }
                                                    edge="end"
                                                >
                                                    {values.showPassword ? (
                                                        <VisibilityOff />
                                                    ) : (
                                                        <Visibility />
                                                    )}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        label="Password"
                                    />

                                    {values.isPasswordValid === false && (
                                        <FormHelperText error>
                                            Введите более трех символов
                                        </FormHelperText>
                                    )}
                                </FormControl>

                                {isError && (
                                    <Box className="w-full,text-center , justify-between , bg-red-600 , h-4, px-4 , rounded , mb-4 , flex-1">
                                        <div className="text-center">
                                            <ErrorOutlineOutlined
                                                sx={{ color: '#fff' }}
                                            />
                                            <Typography component={'span'}>
                                                Логин или пароль введен
                                                неправильно
                                            </Typography>
                                        </div>
                                        <CloseOutlined sx={{ color: '#fff' }} />
                                    </Box>
                                )}

                                <Item
                                    sx={{
                                        justifyContent: 'space-between',
                                        paddingRight: '16px',
                                        marginBottom: '30px',
                                    }}
                                >
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                sx={{ height: '40px' }}
                                                onChange={() =>
                                                    console.log('password')
                                                }
                                            />
                                        }
                                        label="Запомните пароль"
                                    />

                                    <Link
                                        href="#/"
                                        underline="none"
                                        color="primary"
                                        fontWeight="500"
                                    >
                                        Забыли пароль ?
                                    </Link>
                                </Item>

                                <LoadingButton
                                    sxSize={{ height: '42px' }}
                                    disabled={
                                        values.isLoginValid === true &&
                                        values.isPasswordValid === true
                                    }
                                    variant="contained"
                                    classes="bg-blue-600"
                                >
                                    Вход в систему
                                </LoadingButton>
                            </FormGroup>
                        </Box>
                    </Item>
                </Grid>
                <Grid item xl={5} height={'100%'}>
                    <Box height="100vh">
                        <Image src={loginPhoto} alt="login_photo" />
                    </Box>
                </Grid>
            </Grid>
        </>
    );
};

export default LoginView;
