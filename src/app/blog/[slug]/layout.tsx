export const metadata = {
  title: 'test',
  description: 'Thoughts on the programming, tech, music, and my personal life.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
