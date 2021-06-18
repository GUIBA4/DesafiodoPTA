let footer = window.document.getElementById("footer")
let header = window.document.getElementById("header")
let headerHide = window.document.getElementById("headerHide");



headerHide.classList.toggle("hide")
header.classList.toggle("hide2")

function click1() {
    footer.style.background="rgba(81, 111, 251, 0.56)" 
    header.style.background="linear-gradient(180deg, rgba(81, 111, 251, 0.8) 44.17%, rgba(255, 255, 255, 0.12) 100%)"
    headerHide.style.background="linear-gradient(180deg, rgba(81, 111, 251, 0.8) 44.17%, rgba(255, 255, 255, 0.12) 100%)"
}

function click2() {
    footer.style.background="rgba(244, 155, 140, 0.56)" 
    header.style.background="linear-gradient(180deg, #FF99C4 44.17%, rgba(255, 255, 255, 0.12) 100%)"
    headerHide.style.background="linear-gradient(180deg, #FF99C4 44.17%, rgba(255, 255, 255, 0.12) 100%)"
}

function click3() {
    footer.style.background="rgba(240, 94, 43, 0.56)" 
    header.style.background="linear-gradient(180deg, rgba(240, 94, 43, 0.8) 44.17%, rgba(255, 255, 255, 0.12) 100%)"
    headerHide.style.background="linear-gradient(180deg, rgba(240, 94, 43, 0.8) 44.17%, rgba(255, 255, 255, 0.12) 100%)"
}

let lupinha = window.document.getElementById("search1");

function click4() {
    lupinha.style.display="flex"
}

function esconderCampoPesquisa() {
    lupinha.style.display = 'none';
}




let conteudo = window.document.getElementById("mainconteudo");
let tablito1 = window.document.getElementById("tablitoHide");
let brigadeiro1 = window.document.getElementById("brigadeiroHide");
let kolorix1 = window.document.getElementById("azulHide");
let chicabon1 = window.document.getElementById("chicabomHide");
let morango1 = window.document.getElementById("morangoHide");
let minions1 = window.document.getElementById("minionsHide");
function click5() {
    if ( document.getElementById("search").value == "tablito") {
        conteudo.style.display="none"
        tablito1.style.display="flex"
        brigadeiro1.style.display="none"
        kolorix1.style.display="none"
        chicabon1.style.display="none"
        morango1.style.display="none"
        minions1.style.display="none"
    }else if (document.getElementById("search").value == "brigadeiro") {
        conteudo.style.display="none"
        brigadeiro1.style.display="flex"
        tablito1.style.display="none"
        kolorix1.style.display="none"
        chicabon1.style.display="none"
        morango1.style.display="none"
        minions1.style.display="none"
    }else if (document.getElementById("search").value == "kolorix") {
        conteudo.style.display="none"
        brigadeiro1.style.display="none"
        tablito1.style.display="none"
        kolorix1.style.display="flex"
        chicabon1.style.display="none"
        morango1.style.display="none"
        minions1.style.display="none"
    }else if (document.getElementById("search").value == "chica bon"){
        conteudo.style.display="none"
        brigadeiro1.style.display="none"
        tablito1.style.display="none"
        kolorix1.style.display="none" 
        chicabon1.style.display="flex"
        morango1.style.display="none"
        minions1.style.display="none"
    }else if (document.getElementById("search").value == "morango"){
        conteudo.style.display="none"
        brigadeiro1.style.display="none"
        tablito1.style.display="none"
        kolorix1.style.display="none" 
        chicabon1.style.display="none"
        morango1.style.display="flex"
        minions1.style.display="none"
    } else if (document.getElementById("search").value == "minions"){ 
        conteudo.style.display="none"
        brigadeiro1.style.display="none"
        tablito1.style.display="none"
        kolorix1.style.display="none" 
        chicabon1.style.display="none"
        morango1.style.display="none"
        minions1.style.display="flex"
    }else{
        alert("esse picole está em falta, tente outro obrigado!")
        conteudo.style.display="flex"
        tablito1.style.display="none"
        brigadeiro1.style.display="none"
        kolorix1.style.display="none"
        chicabon1.style.display="none"
        morango1.style.display="none"
        minions1.style.display="none"
    }
    
}

