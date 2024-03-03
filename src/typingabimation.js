import React, { useState, useEffect } from 'react';
import './App.css'; 
const TypingAnimation = () => {
  const [text, setText] = useState('');
  const fullText = "Welcome in my portfolio I'am Louay Hcine Web Developper.";

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => {
      // Nettoyer l'intervalle lorsqu'on quitte le composant
      clearInterval(typingInterval);
    };
  }, []); // Le tableau vide signifie que cette fonction d'effet n'est exécutée qu'après le premier rendu

  return (
    <div>
      <h1 className='typ'>{text}</h1>
    </div>
  );
};

export default TypingAnimation;
