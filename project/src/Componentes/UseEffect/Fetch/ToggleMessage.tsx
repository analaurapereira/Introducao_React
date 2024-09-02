import { useState, useEffect } from 'react';

function ToggleMessage() {
    const [showMessage, setShowMessage] = useState<boolean>(false);
    
    useEffect(() => {
        console.log('O componente ToggleMessage foi renderizado.');
    });

    return (
        <div>
            <button onClick={() => setShowMessage(!showMessage)}>
                {showMessage ? 'Ocultar Mensagem' : 'Exibir Mensagem'}
                {showMessage && <p>Esta é a mensagem!</p>}
            </button>
        </div>
    );
}
export default ToggleMessage;