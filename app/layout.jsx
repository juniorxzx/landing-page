import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import { Nunito } from "next/font/google";

export const metadata = {
  title: "Lunna",
  description: "Landing Page Lunna",
};

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${font.className} dark:bg-gray-950`}>
        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
