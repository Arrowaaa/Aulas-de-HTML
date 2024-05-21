// var = "varival para usar na pagina completa"
// let = "varival para usar no contexto aplicado/ variavel temporaria/ descartavel"
// const = "varival para usar FIXAMENTE (sem alteração/variavel global)"

let indexSlide = 0

function showSlide(index) {
    const carrossel = document.querySelector(".carrossel");

    const totalSlide = 7;

    if(index >= totalSlide){
        indexSlide = 0;

    } else if (index < 0){
        indexSlide = totalSlide - 1;

    } else{
        indexSlide = index;
    }



    const offset = -indexSlide * 100;
    carrossel.style.transform = `translateX(${offset}%)`;
}

function anteriorSlide() {
    indexSlide = indexSlide - 1;
    showSlide(indexSlide);

}

function proximoSlide() {
    indexSlide = indexSlide + 1;;
    showSlide(indexSlide);

}


//troca sozinho
setInterval(() => {
    proximoSlide()
},10000);
