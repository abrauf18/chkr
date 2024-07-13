import type { Metadata } from "next";
import "../styles/globals.css";
import localFont from "next/font/local";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { SessionProvider } from "next-auth/react";

const myFont = localFont({ src: "../fonts/LufgaRegular.ttf" });

export const metadata: Metadata = {
  title: "CHKR",
  description: "Welcome to CHKR Landing Page",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <ToastContainer
          position="top-right"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}

