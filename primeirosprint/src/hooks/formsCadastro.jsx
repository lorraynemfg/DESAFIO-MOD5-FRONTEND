import { useState } from "react";

 export function FormsCadastro(estagios) {
    const [estagioAtual, setEstagioAtual] = useState(0);

    function mudarEstagio(indice, evento){
        evento.preventDefault();
        
        if(indice < 0 || indice >= estagios.length)
        return

        setEstagioAtual(indice);
    }
    return {
        estagioAtual,
        setEstagioAtual,
        formularioAtual: estagios[estagioAtual],
        mudarEstagio,
       
    };
  }

 