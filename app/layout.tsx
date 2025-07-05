export const metadata = {
  title: 'SOCIIETY',
  description: 'The new order of legacy, fashion, and encrypted identity.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
