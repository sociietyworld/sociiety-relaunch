import './globals.css' // Make sure this file exists in /app or /styles

export const metadata = {
  title: 'SOCIIETY',
  description: 'The new order of luxury, privacy, and identity.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
