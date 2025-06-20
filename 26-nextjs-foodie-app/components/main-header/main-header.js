import Link from "next/link";
import logoImg from "@/assets/logo.png"

// ? style to be applied scoped within files in which it is included
import classes from './main-header.module.css'
import Image from "next/image";
import MainHeaderBackground from "@/components/main-header/main-header-background";
import NavLink from "@/components/main-header/nav-link";

export default function MainHeader() {
    return <>
        <MainHeaderBackground />
        <header className={classes.header}>
            <Link className={classes.logo} href="/">
                {/* lazy loading image by default */}
                <Image src={logoImg} alt="logo" priority/>
                NextLevel Food
            </Link>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink href="/meals"> Browse Meals</NavLink>
                        <NavLink href="/community">Community</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    </>
}