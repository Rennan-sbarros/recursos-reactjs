import {useState} from 'react';

function SmartCounter(){
    /*
    Retorna um vetor
    1.Variavel stateful
    2.Função amarrada a essa variavel que atualiza o valor
    */
    const [quantity, setQuantity] = useState(1);

    return(
        <>
            <h1>{quantity}</h1>
            <button onClick={() => setQuantity(quantity + 1)}>Aumentar</button>
        </>
    )
};

export default SmartCounter;