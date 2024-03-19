import "@styles/globals.scss";

import { Header } from "@components";

export const metadata = {
  title: "CMS Blog",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="container mx-auto px-10 mb-8 ">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
