function botao() {
    //variavel = documento selecionado pelo ID
    corpinho = document.getElementById("corpo");
    console.log(corpinho);
    font_branco =document.getElementById('titulo_principal')

    box = document.getElementById("caixa");
    console.log(box);

    //variavel = lista das propriedade  da classe corpinho com a função(List)
    //variavel = lista os nomes da classe existente (className)
    classe = corpinho.className;
    classeb = box.className;
    classfb = font_branco.className;

    //split -> separa em array o texto
    classSeparada = classe.split(' ')
    classSB = classeb.split(' ')
    classb = classfb.split(' ')

    console.log(classSeparada);
    console.log(classSB);
    console.log(classb)


    for (let cont = 0; cont < classSeparada.length; cont++) {
        if (classSeparada[cont] == 'tomato') {
            console.log('a sua cor de fundo é TOMATO')
            corpinho.classList.remove('tomato')
            corpinho.classList.add('skyblue')

            if (classSB[cont] == 'skyblue') {
                console.log('a sua cor de fundo é skyblue')
                box.classList.remove('skyblue')
                box.classList.add('tomato')
            }
            if (classb[cont] == 'font_branco') {
                console.log('a sua cor de fundo é Branco')
                font_branco.classList.remove('font_branco')
                font_branco.classList.add('font_black')
            }


        } else if (classSeparada[cont] == 'skyblue') {
            console.log('a sua cor de fundo é TOMATO')
            corpinho.classList.remove('skyblue')
            corpinho.classList.add('tomato')

            if (classSB[cont] == 'tomato') {
                console.log('a sua cor de fundo é TOMATO')
                box.classList.remove('tomato')
                box.classList.add('skyblue')
            }
            if (classb[cont] == 'font_black') {
                console.log('a sua cor de fundo é Preta')
                font_branco.classList.remove('font_black')
                font_branco.classList.add('font_branco')
            }
        }

    }



}

