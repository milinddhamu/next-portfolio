import { ThemeSwitch } from "@/components/theme-switch";
import { Navbar } from "@/components/navbar";
import Name from "@/components/name-anime";
import {Profile} from "@/components/profile";
import type { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Milind Dhamu',
  description: 'Home page',
};

export default function Home() {
	return (
		<>
		<Profile />
		</>
	);
}
