import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import {Providers} from "./providers";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CinemaSoul',
  description: "I didn't NEED to make a website but i couldn't think of any else but anyways this is the website for the showcase of the cuban revolution movie history group project by Amari Cross, Jayden Silvera, Caleb Taylor-Brown, Mikhail King and Rahim Downes",
}



export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en" className='dark'>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
