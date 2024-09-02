import React, { useState } from 'react';

const EventHandlingExample: React.FC = () => {

    const [inputValue, setInputValue] = useState<string>('');
    const [clickCount, setClickCount] = useState<number>(0);
    const [inputValue2, setInputValue2] = useState<string>('');

    // Função para manipular mudanças no campo de entrada

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }

    const handleInputChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue2(event.target.value);
    }

    // Função para manipular cliques no botão
    const handleButtonClick = () => {
        setClickCount(clickCount + 1);
    }

    const handleButtonClick2 = () => {
        setClickCount(clickCount - 1);
    }


    return (
        <div>
            <div>
                <h1>Exemplo de Manipulação de Eventos</h1>
            </div>
            <div>
                <label htmlFor='inputField'>Digite algo: </label>
                <input
                type='text'
                id='inputField'
                value={inputValue}
                onChange={handleInputChange}
                />
                <p>Você digitou: {inputValue}</p>
            </div>
            <div>
                <label htmlFor='inputField'>Seu nome: </label>
                <input
                type='text'
                id='inputField'
                value={inputValue2}
                onChange={handleInputChange2}
                />
                <p>Seu nome: {inputValue2}</p>
            </div>
            <div>
                    <button onClick={handleButtonClick}>
                    Clique aqui para adicionar
                    </button>
                    <p>O botão foi clicado {clickCount} vezes</p>
                    <button onClick={handleButtonClick2}>
                    Clique aqui para subtrair
                    </button>
            </div>
        </div>
    );
};

export default EventHandlingExample;