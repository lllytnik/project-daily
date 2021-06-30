import s from './SearchBlock.module.css';
/* import iconSearch from '../../images/search-block/search-icon.svg'; */

function Search(props) {
    return (
        <div className={s.searchBlock}>
            <button className={s.btnSearch} type="button">
            </button>
            <input className={s.search} id="search" type="text" placeholder="Search for anything…" value=""></input>
        </div>
    );
}

export default Search;
