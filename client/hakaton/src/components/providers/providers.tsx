'use client'

import theme from "@/theme";
import { ThemeProvider } from "@emotion/react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { SessionProvider } from "next-auth/react";
import type { FunctionComponent } from "react";

interface Props {
    children: React.ReactNode
}

export const Providers: FunctionComponent<Props> = ({children}) => {
    return (
        <SessionProvider>
            <AppRouterCacheProvider
            options={{ key: 'css' }}>
                <ThemeProvider theme={theme}>
                    {children}
                </ThemeProvider>
            </AppRouterCacheProvider>
        </SessionProvider>
    )
}