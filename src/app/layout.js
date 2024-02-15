'use client';

import * as React from "react"
import { NextUIProvider } from "@nextui-org/react"
import {ThemeProvider as NextThemesProvider} from "next-themes";

import { ThemeSwitcher } from './components/ThemeSwitcher'
import './globals.css'

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <NextUIProvider>
          <NextThemesProvider attribute="class" defaultTheme="light">
            <main className="app">
              <ThemeSwitcher />
              {children}
            </main>
          </NextThemesProvider>
        </NextUIProvider>
      </body>
    </html>
  )
}
