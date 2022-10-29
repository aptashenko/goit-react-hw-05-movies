import { Link, Outlet } from 'react-router-dom';
import css from './TopMenu.module.css';

export default function TopMenu() {
    return (
        <>
        <nav className={css.nav}>
            <ul className={css.nav__list}>
                <li className={css.nav__item}>
                    <Link className={css.nav__link} to="/">Home</Link>
                </li>
                <li className={css.nav__item}>
                    <Link className={css.nav__link} to="/movies">Movies</Link>
                </li>
            </ul>
        </nav>
        <Outlet />
        </>
    )
}