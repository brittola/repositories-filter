import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import List from './components/List';

function App() {

  const [repos, setRepos] = useState([]);
  const [search, setSearch] = useState([]);
  const [owner, setOwner] = useState({});

  useEffect(() => {

    const getData = async () => {
      const res = await fetch('https://api.github.com/users/brittola/repos');
      const json = await res.json();

      //hiding specific repository and README repository
      //if you just want to hide README, delete the first filter condition
      setRepos(json.filter(repo => repo.id !== 516155093 && repo.name !== json[0].owner.login));
      setSearch(json.filter(repo => repo.id !== 516155093 && repo.name !== json[0].owner.login));
      setOwner({
        imageSrc: json[0].owner.avatar_url,
        profileName: json[0].owner.login,
        profileUrl: json[0].owner.html_url
      });
    }

    getData();

  }, []);

  return (
    <div className="App">
      <Header imageSrc={owner.imageSrc}
        profileName={owner.profileName}
        profileUrl={owner.profileUrl}
        setSearch={setSearch} repos={repos}
      />

      <h1>Repositórios</h1>

      <List list={search} />
    </div>
  );
}

export default App;