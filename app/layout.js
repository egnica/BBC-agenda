import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import styles from "./page.module.css";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Barlow Conference Agenda",
  description: "Barlow Conference Agenda Chicago 2025",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Image
          className={styles.profilePic}
          height={100}
          width={100}
          src="https://www.barlowresearch.com/BusinessBankingConference_2025/images/logo2.png"
          alt={`barlow logo`}
        />
        <nav className={styles.nav}>
          <a href="/">
            <p>Conference Home</p>
          </a>
          <a href="/speakers">
            <p>Speaker</p>
          </a>
          <a href="default.asp">
            <p>Home</p>
          </a>
          <a href="default.asp">
            <p>Home</p>
          </a>
        </nav>
        {children}
      </body>
    </html>
  );
}
