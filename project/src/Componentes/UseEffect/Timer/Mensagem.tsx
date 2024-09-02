import { useState, useEffect } from 'react';

function Mensagem() {

    const [mensagem, setMensagem] = useState('Tarde');

    useEffect(() => {
        const tempo = setTimeout(() => {
         setMensagem('Noite');
        }, 10000);

        return () => clearTimeout(tempo);

    }, []);

    return (
        <div>
            <h3>{mensagem}</h3>
        </div>
    );
}

export default Mensagem;