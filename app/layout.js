import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "2025 Barlow Conference Agenda",
  description: "Barlow Conference Agenda Chicago 2025",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <nav className={styles.nav}>
          <Link href="https://www.barlowresearch.com" passHref>
            <Image
              className={styles.logo}
              height={100}
              width={100}
              src="https://mybarlow.barlowresearch.com/BusinessBankingConference_2025/images/logo2.png"
              alt={`barlow logo`}
            />
          </Link>

          <Link href="https://barlowresearch.com/?page_id=9421">
            <p>Home</p>
          </Link>
          <Link href="/">
            <p>Agenda</p>
          </Link>
          {/* <Link href="/speakers">
            <p>Speaker</p>
          </Link> */}
          <Link href="https://barlowresearch.com/?page_id=9421#venue">
            <p>Venue</p>
          </Link>
          <Link href="https://barlowresearch.com/?page_id=9421#hotel">
            <p>Hotels</p>
          </Link>
          {/* <Link href="https://www.barlowresearch.com/BusinessBankingConference_2025/#sponsor">
            <p> Sponsors</p>
          </Link> */}
        </nav>
        {children}
      </body>
    </html>
  );
}
