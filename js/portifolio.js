const frm = document.querySelector("form");
const conteudo = document.getElementById("conteudo");
let estadoGuia;

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    if(estadoGuia == 2 || estadoGuia == 3){
        apagaConteudo();
    }
    alteraGuia(estadoGuia = 1);
    const dvBox = document.createElement("div");
    dvBox.className = "pagina-conteudo-sobremim";
    dvBox.id = "conteudo2";
    conteudo.appendChild(dvBox);
    sobreMim.forEach(textos => {
        const texto = document.createTextNode(textos.paragrafo);
        const p = document.createElement("p");
        p.appendChild(texto);
        dvBox.appendChild(p);
    });
    btSobreMim.disabled = true;
});
frm.btFormacao.addEventListener("click", () => {
    if(estadoGuia == 1 || estadoGuia ==3){
        apagaConteudo();
    }
    alteraGuia(estadoGuia = 2);
    const dvBox = document.createElement("section");
    dvBox.id = "conteudo2";
    conteudo.appendChild(dvBox);
    dvBox.className = "pagina-conteudo-scroll";
    formacaoCursos.forEach(cursos => {
        const dvBoxes = document.createElement("div");
        dvBox.appendChild(dvBoxes);
        dvBoxes.className = "pagina-conteudo-formacao";
        const cursoAno = document.createTextNode(`${cursos.nome} - ${cursos.ano}`);
        const cursoInstiuicao = document.createTextNode(cursos.instituicao);
        const cursoSintese = document.createTextNode(cursos.sintese);
        const h4 = document.createElement("h4");
        dvBoxes.appendChild(h4);
        h4.appendChild(cursoAno);
        const h5 = document.createElement("h5");
        dvBoxes.appendChild(h5);
        h5.appendChild(cursoInstiuicao);
        const p = document.createElement("p");
        dvBoxes.appendChild(p);
        p.appendChild(cursoSintese);
    });
});

frm.btContato.addEventListener("click", () => {
    if(estadoGuia == 1 || estadoGuia == 2){
        apagaConteudo();
    };
    alteraGuia(estadoGuia = 3);
    const dvBox = document.createElement("div");
    dvBox.className = "pagina-conteudo-contato"
    dvBox.id = "conteudo2";
    conteudo.appendChild(dvBox);
    contatos.forEach(contato => {
        const texto = document.createTextNode(contato.contato);
        const p = document.createElement("p");
        p.className = "pagina-conteudo-contato-p"
        p.appendChild(texto);
        dvBox.appendChild(p);
    })
});

function apagaConteudo () {
    const boxConteudo = document.getElementById("conteudo2")
    conteudo.removeChild(boxConteudo);
};

function alteraGuia (estado) {
    if(estado == 1){
        btSobreMim.className = "guia-selecionada";
        btFormacao.className = "guia-desselecionada";
        btContato.className = "guia-desselecionada";
        btSobreMim.disabled = true;
        btFormacao.disabled = false;
        btContato.disabled = false;
    }else if(estado == 2){
        btSobreMim.className = "guia-desselecionada"
        btFormacao.className = "guia-selecionada"
        btContato.className = "guia-desselecionada"
        btSobreMim.disabled = false;
        btFormacao.disabled = true;
        btContato.disabled = false;
    }else{
        btSobreMim.className = "guia-desselecionada"
        btFormacao.className = "guia-desselecionada"
        btContato.className = "guia-selecionada"
        btSobreMim.disabled = false;
        btFormacao.disabled = false;
        btContato.disabled = true;
    }
}
window.onload = function(){
    document.getElementById("btSobreMim").click();
};
