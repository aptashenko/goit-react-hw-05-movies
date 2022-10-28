import css from './search.module.css'
import PropTypes from 'prop-types';

export const SearchForm = ({handleInput}) => (
    <form className={css.searchWrapper} onSubmit={handleInput}>
        <label className={css.label}>
            <input className={css.input} type="text" name="search" placeholder="Пошук..." />
        </label>
        <label className={css.label}>
            <input type="submit" value="Search" />
        </label>
    </form>
)

SearchForm.propTypes = {
    handleInput: PropTypes.func
}