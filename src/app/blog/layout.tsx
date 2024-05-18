export const metadata = {
  title: 'Blog – Vladyslav Burdeniuk',
  description: 'Thoughts on the programming, tech, music, and my personal life.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
