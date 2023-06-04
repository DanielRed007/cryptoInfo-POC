import React, { FC } from "react";
import { ThemeProvider } from '@mui/material/styles';
import { configSelector } from "./store/selectors/configSelector";
import { lightTheme, darkTheme } from './config/theme/theme';
import { Header } from "./components/header/Header";
import { useSelector } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';

export const App: FC = () => {
    const { theme } = useSelector(configSelector);

    return (
        <>
            <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
                <CssBaseline />
                <Header />
            </ThemeProvider>
        </>
    )
};