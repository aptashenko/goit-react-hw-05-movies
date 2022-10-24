import css from './search.module.css'

export const SearchMenu = () => {
    return (
        <form className={css.searchWrapper}>
            <label className={css.label}>
                <input className={css.input} type="text" placeholder="Пошук..." />
            </label>
            <label className={css.label}>
                <input type="submit" value="Search" />
            </label>
        </form>
    )
}