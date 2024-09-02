import React, { useState } from 'react';

// Definindo a interface para os itens da lista
interface Item{
    id:number;
    name:string;
    winner:number;
    ranking2024:number;
}

// Componente de Lista que renderiza itens com base em uma condição
const ItemList: React.FC =() => {
    const[itens] = useState<Item[]>([
        {id: 1,name:"Brasil",winner:2, ranking2024:3},
        {id: 2,name:"Italy",winner:1, ranking2024:1},
        {id: 3,name:"Turky",winner:0, ranking2024:4}
    ]);

    const [showItems, setShowItems] = useState<boolean>(true);

    return(
        <div>
            <h1>Countries List</h1>
            <button onClick={() => setShowItems(!showItems)}>
                {showItems ? "Esconder Itens" : "Mostar Itens"}
            </button>

            {/* Renderização Condicional */}

            {showItems ? (
                <ul>
                { /* Renderizando a lista de itens */}
                    {itens.map((item) => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            ) : (
                <p>A lista está oculta</p>
                )}
        </div>
    )
};

function Renderizacao() {

 return (
    <div className='Renderizacao'>
        <ItemList />
    </div>
 );
}
export default Renderizacao;