import { Raleway,Fira_Code as FontMono, Inter as FontSans,Kanit } from "next/font/google"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontRaleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
})

