'use client'
import { usePathname } from 'next/navigation'
import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";
import { useRouter } from 'next/navigation'
import { ThemeSwitch } from "@/components/theme-switch";
import {
	GithubIcon,
	LinkedInIcon,
	Logo
} from "@/components/icons";

export const Navbar = () => {
	const pathname = usePathname();

	return (
		<NextUINavbar maxWidth="lg" position="sticky" shouldHideOnScroll isBordered>
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
			<NavbarBrand as="li" className="gap-3 max-w-fit">
					<NextLink aria-label="Logo link" className="flex justify-start items-center gap-1" href="/">
						<Logo />
					</NextLink>
				</NavbarBrand>
				<ul className="hidden sm:flex gap-4 justify-start ml-2">
					{siteConfig.navItems.map((item) => (
						<NavbarItem key={item.href}>
							<NextLink
								className={clsx(
									linkStyles({ color: "foreground" }),
									"data-[active=true]:text-secondary data-[active=true]:font-medium"
								)}
								color="foreground"
								href={item.href}
								data-active={pathname === item.href}
							>
								{item.label}
							</NextLink>
						</NavbarItem>
					))}
				</ul>
			</NavbarContent>

			<NavbarContent
				className="hidden sm:flex basis-1/5 sm:basis-full"
				justify="end"
			>
				<NavbarItem className="hidden sm:flex gap-2">
					<Link isExternal href={siteConfig.links.linkedin} aria-label="Discord">
						<LinkedInIcon className="text-default-500" />
					</Link>
					<Link isExternal href={siteConfig.links.github} aria-label="Github">
						<GithubIcon className="text-default-500" />
					</Link>
					<ThemeSwitch />
				</NavbarItem>
			</NavbarContent>

			<NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
				<Link isExternal href={siteConfig.links.github} aria-label="Github">
					<GithubIcon className="text-default-500" />
				</Link>
				<ThemeSwitch />
				<NavbarMenuToggle />
			</NavbarContent>

			<NavbarMenu>
				<div className="mx-4 mt-2 flex flex-col gap-2">
					{siteConfig.navMenuItems.map((item, index) => (
						<NavbarMenuItem key={`${item}-${index}`} className="border-b-1 border-gray-500/40 pb-2">
							<Link
								color={
									index === 1
										? "secondary"
										: index === siteConfig.navMenuItems.length - 1
										? "primary"
										: "foreground"
								}
								href={item.href}
								size="lg"
								className="transition-all ease-in-out duration-300 hover:tracking-widest uppercase font-semibold"
							>
								{item.label}
							</Link>
						</NavbarMenuItem>
					))}
				</div>
			</NavbarMenu>
		</NextUINavbar>
	);
};
