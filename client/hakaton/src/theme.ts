'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});

const theme = createTheme({
    typography: {
        fontFamily: roboto.style.fontFamily,
    },
    palette: {
        mode: 'dark',
        
        // primary: {
        //     main: '#3164ff',
        // },
        //   secondary: {
        //     main: '#fe720d',
        // },
    },
});

export default theme;