var Ball, database;
var position;

function setup() {
    database = firebase.database();
    console.log(database);
    createCanvas(500, 500);
    //  Exiba o modelo do código para criar o sprite ball

  

// //     Adicione a referência ao banco de dados usando o comando
// // firebase.database(). firebase.database().ref() para referir-se ao local fonte ou a child no
// banco de dados.

  
    //  Adicione a função showError dentro da função de configuração
    BallPosition.on("value", readPosition,      );
}

function draw() {
    background("white");
    // O movimento da bola é controlado pelas teclas de seta.
    
       
 
       


       
    
    drawSprites();
}

//  Mude a posição quando as teclas de seta forem pressionadas usando writePosition().

function (x, y) {
    database.ref("bola/posicao").set({
        x: position.x + x,
        y: position.y + y,
    });
}

// Adicione readPosition para alterar os valores no banco de dados.
function    (data) {
    position = data.val();
    console.log(position.x);
    
    
}

//  Dentro da função showError imprima a mensagem do console
function showError() {
    
}