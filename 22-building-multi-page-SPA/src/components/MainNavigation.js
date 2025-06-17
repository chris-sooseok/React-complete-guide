import {NavLink} from "react-router-dom";
import classes from "./MainNavigation.module.css";

export default function MainNavigation() {
    return (<header className={classes.header}>
        <nav>
            <ul className={classes.list}>
                {/* ? className passed to NavLink accepts function that returns  */}
                {/* ? since the highlight is applied relative path, "end" is used to prevent this for home page */}
                <li><NavLink to='/' className={({isActive}) => isActive ? classes.active : undefined} end>Home</NavLink>
                </li>
                <li><NavLink to="/products"
                             className={({isActive}) => isActive ? classes.active : undefined}>Products</NavLink></li>
            </ul>
        </nav>
    </header>);
}