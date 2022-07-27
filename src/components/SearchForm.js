import './SearchForm.css'
import { BiSearch } from 'react-icons/bi';

function SearchForm({ setSearch, repos }) {

    function handleChange(e) {
        if (!e.target.value) {
            setSearch(repos);
            return;
        }

        let filter = repos.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()));

        filter.length > 0 ? setSearch(filter) : setSearch([''])
    }

    return (
        <form>
            <input onChange={handleChange} type="text" placeholder="Buscar repositório" />
            <BiSearch className="form--icon" />
        </form>
    );

}

export default SearchForm;