import { inter, lusitana } from './ui/fonts'
import './globals.css'
import GlobalStateProvider from './context/context'


export const metadata = {
  title: 'Ludushub',
  description: 'An online platform dedicated to curating a diverse collection of games, including top-rated titles, latest releases, and games along with different publishers and developers. Users can create and personalize profiles and add their favorite games.',
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
