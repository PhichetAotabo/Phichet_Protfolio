"use client";
import { Providers } from "./providers";
import { Nav } from "./components/nav";
import Footer from "./components/footer";

import { tokens } from "@fluentui/react-components";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="th">
      <Providers>
        <header>
          <Nav></Nav>
        </header>

        <body
          style={{
            padding: 8,
            display: "flex",
            flexDirection: "column",
            gap: 16,
            height: "100vh",
            backgroundColor: tokens.colorNeutralBackground1,
          }}
        >
          {children}
        </body>
        <Footer />
      </Providers>
    </html>
  );
}
