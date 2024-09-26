import './App.css';
import {useRef} from 'react';

import React from 'react';

function App() {
    const handleClick = () => {
        alert('Bonjour, le bouton a été cliqué !');
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <button
                style={{ padding: '200px 200px', fontSize: '160px' }}
                onClick={handleClick}  // Ajout de la fonction handleClick au clic du bouton
            >
                bonjour
            </button>
        </div>
    
    );
}

export default App;
