import React, {useState, useEffect} from 'react'
import '../IfoodCounter/IfoodCounter.css';

export default function IfoodCounter() {
    const [value, setValue] = useState(1);
    const [buttonStyle, setButtonStyle] = useState("counter-button-minus-active");

    useEffect(() => {
        //Qual a ação do efeito colateral    
        document.getElementById("moeda").innerHTML = 2.00 * value;
    }, [value])
    /*
    Se[] vazio, executa o efeito sem depender de nada. 
    [value] = Quando value forem acionados, ele executará o efeito colateral.
    */
    function down(){
        if(value <= 1){
            setButtonStyle("counter-button-minus-desactive");
            //Mudar o CSS
        }
        if(value > 0){
            setValue(value - 1);
        }
    }
    function up(){
        setValue(value + 1)
        setButtonStyle("counter-button-minus-active");
    }

    return (
        <div className="countex-wrapper">
            <button 
                className={buttonStyle}
                onClick={down}
            >
                -
            </button>

            <p>{value}</p>

            <button 
                className="counter-button-plus-active"
                onClick={up}
            >
                +
            </button>

            <button id="moeda">
                12,00
            </button>
        </div>
    )
}
