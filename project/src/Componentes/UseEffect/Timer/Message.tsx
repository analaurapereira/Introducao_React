import { useState, useEffect } from 'react';

function Message() {

    const [message, setMessage] = useState('Bem-vindo ao projeto!');

    useEffect(() => {
        const tempo = setTimeout(() => {
         setMessage('Obrigado por visitar!');
        }, 5000);

        return () => clearTimeout(tempo);

    }, []);

    return (
        <div>
            <h3>{message}</h3>
        </div>
    );
}

export default Message;