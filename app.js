/*
    -> Contator de acesso ao site com web storage
    * function: 
    * param: 
*/

let vcorf, vcort, vnome;

// if(typeof(Storage) != "undefined"){
    // if(localStorage.visitas){
    //     // localStorage.visitas = Number(localStorage.visitas) + 1;
    // } else {
    //     // localStorage.setItem("visitas",1);
    //     // localStorage.visitas = 1;
    // }
    // console.log("Visitas: " + localStorage.visitas);
// }else {
//     console.log("Sem suporte a Web Storage");
// }

function inicia(){
    if(localStorage.nome){
        vcorf = localStorage.corf;
        vcort = localStorage.cort;
        vnome = localStorage.nome;
        defineCor(1,vcorf);
        defineCor(2,vcort);
        document.getElementById('painel').innerHTML = "Bem vindo "+vnome+"<hr>"
    }     
}

function gravar(){
    let form  = document.getElementById('fconf');
    vnome = document.getElementById('fnome').value;
    localStorage.corf= vcorf;
    localStorage.cort= vcort;
    localStorage.nome= vnome;
    form.style.display="none";
}

function defineCor(op, cor){
    if(op == 1){
        document.body.style.backgroundColor = cor;
        vcorf = cor;
    } else {
        document.body.style.color = cor;
        vcort = cor
    }
}

function mostraConf(){
    let form = document.getElementById("fconf");
    form.style.display = "block";
}

window.addEventListener("load",inicia)