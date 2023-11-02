import { inter, lusitana } from './ui/fonts'
import './globals.css'
import GlobalStateProvider from './context/context'


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lusitana.className}>
        <GlobalStateProvider>
          {children}
        </GlobalStateProvider>
      </body>
    </html>
  )
}
