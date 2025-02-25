import { Fira_Sans } from "next/font/google";
import "./globals.css";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["400", "700"], // Choose the weights you need
  variable: "--font-fira-sans",
  display: "swap", // Ensures better performance
});
export const metadata = {
  title: "2025 Barlow Conference Agenda",
  description: "Barlow Conference Agenda Chicago 2025",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${firaSans.variable} `}>
        <nav className={styles.nav}>
          <Link href="https://www.barlowresearch.com" passHref>
            <Image
              className={styles.logo}
              height={50}
              width={180}
              src="https://mybarlow.barlowresearch.com/BusinessBankingConference_2025/images/barlow-row-blk-logo.png"
              alt={`barlow logo`}
            />
          </Link>

          <Link href="https://barlowresearch.com/?page_id=9421">
            <p className={styles.link}>Home</p>
          </Link>
          <Link href="/">
            <p className={styles.link}>Agenda</p>
          </Link>
          {/* <Link href="/speakers">
            <p className={styles.link}>Speaker</p>
          </Link> */}
          <Link href="https://barlowresearch.com/?page_id=9421#venue">
            <p className={styles.link}>Venue</p>
          </Link>
          <Link href="https://barlowresearch.com/?page_id=9421#hotel">
            <p className={styles.link}>Hotels</p>
          </Link>
          <Link href="https://barlowresearch.com/?page_id=9421#faq">
            <p>FAQ</p>
          </Link>
          <Link href="https://barlowresearch.com/?page_id=9421#sponsors">
            <p className={styles.link}>Sponsors</p>
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
