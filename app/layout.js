import NavBar from '@/components/home/nav-bar';
import './globals.css';

export const metadata = {
  title: "SiteWorks | Precision in every measurement",
  description: "SiteWorks",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}</body>
    </html>
  );
}
