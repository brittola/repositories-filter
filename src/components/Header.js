import './Header.css';
import SearchForm from './SearchForm';

function Header({ imageSrc, profileName, profileUrl, setSearch, repos }) {

    return (
        <header>
            <div>
                <img className="header--img" src={imageSrc} alt={`${profileName} face`} />
                <div className="header--texts">
                    <a className="header--link" href={profileUrl} target="_blank" rel="noreferrer">{profileName}</a>
                    <small>Visite o meu perfil 👆</small>
                </div>
            </div>
            <SearchForm setSearch={setSearch} repos={repos} />
        </header>
    )

}

export default Header;