import { useState, useEffect } from 'react';

function Tempo() {

    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prev => prev + 1);
    }, 1000);

        return () => clearInterval(interval);
    }, []);

    return(
        <div>
            <h2>Tempo Decorrido: {seconds} segundos</h2>
        </div>
    );    
}

export default Tempo;