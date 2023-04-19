import TituloSection from "../TituloSection";
import AvaliacaoCliente from "./AvaliacaoCliente";

export default function Depoimentos () {

    const avaliacoes = [
        {foto:"foto01.jpg", nome:"Ana Bruck", avaliacao01 :"Estou muito feliz", avaliacao02:"Recomendo essa corretora"},
        {foto:"foto02.jpg", nome:"Bia Wolf", avaliacao01:"Gostei bastante da minha aquisição", avaliacao02:"Virou minha amiga"},
        {foto:"foto03.jpg", nome:"Dani Shutz", avaliacao01:"Quero comprar mais um", avaliacao02:"Ja quero comprar mais dois"}
    ];

    const avaliacoesDinamicas = ["Estou muito feliz", "Gostei bastante da minha aquisição", "Virou minha amiga", "Ja quero comprar mais dois", "Recomendo essa corretora"];

    function showAvaliacoes() {
        let avaliacoesClientes = [];

        for(let i=0; i<avaliacoes.length; i++) {
            avaliacoesClientes.push(
                <AvaliacaoCliente 
                    foto={avaliacoes[i].foto}
                    nome={avaliacoes[i].nome}
                    avaliacao01={avaliacoesDinamicas[Math.floor(Math.random() * avaliacoesDinamicas.length)]}
                    avaliacao02={avaliacoesDinamicas[Math.floor(Math.random() * avaliacoesDinamicas.length)]}/>                
            );
        }

        return avaliacoesClientes;
    }

    

    return(
        <section>
        <TituloSection titulo="Clientes felizes, Novos Amigos :)" subtitulo="(DEPOIMENTOS DE ALGUNS CLIENTES REAIS)"/>
        {showAvaliacoes()}
        </section>

    )
}