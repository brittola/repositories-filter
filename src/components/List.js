import './List.css';

function List({ list }) {

    return (
        <section className="repos--list">
            {list.map((item, key) => {
                if(item.name){
                    return (
                        <div className="list--item" key={key}>
                            <a href={item.html_url ? item.html_url : "/"} target="_blank" rel="noreferrer">{item.name ? item.name : 'Nenhum resultado encontrado :('}</a>
                            <small>{item.description ? item.description : ''}</small>
                        </div>
                    )
                }else{
                    return (
                        <p key={0}>Nenhum resultado encontrado :(</p>
                    )
                }
            })}
        </section>
    );

}

export default List;