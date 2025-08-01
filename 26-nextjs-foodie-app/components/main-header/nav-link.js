'use client';

// ! This Link component is outsourced to keep main-header component to be server-side so that we take nextJS advantage
import Link from "next/link";
import {usePathname} from "next/navigation";
import classes from './nav-link.module.css'

export default function NavLink({href, children}) {

    const path = usePathname();
    return (
        <Link href={href} className={path.startsWith(href) ? `${classes.link} ${classes.active}` : classes.link}>
            {children}
        </Link>
    )
}