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
        <header style={{ position: "sticky", top: 0, zIndex: 50, padding: 0 }}>
          <Nav></Nav>
        </header>

        <body>
          <div
            style={{
              margin: 0,
              padding: 8,
              display: "flex",
              flexDirection: "column",
              gap: 16,
              minHeight: "100vh",
              backgroundColor: tokens.colorNeutralBackground1,
            }}
          >
            {children}
          </div>
        </body>
        <Footer />
      </Providers>
    </html>
  );
}
