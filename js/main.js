const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//Obtiene las dimensiones de la pantalla actual
const window_height = window.innerHeight;
const window_width = window.innerWidth;

//El canvas tiene las mismas dimensiones que la pantalla
canvas.height = window_height;
canvas.width = window_width;

canvas.style.background = '#ff8';

class Circle {
    constructor(x, y, radius, color, text) {
        this.posX = x;
        this.posY = y;
        this.radius = radius;
        this.color = color;
        this.text = text;

    }
    draw(context) {
        context.beginPath();
        context.strokeStyle = this.color;
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.font = "20px Arial";
        context.fillText(this.text, this.posX, this.posY)

        context.lineWidth = 3;
        context.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2, false);
        context.stroke();
        context.closePath();

    }



}

let arrayCircle = [];
for (let i = 0; i < 10; i++) {
    let randomX = Math.random()* window_width;
    let randomY = Math.random()* window_height;
    let randomRadius = Math.floor(Math.random()*100 + 5);

    let miCirculo = new Circle(randomX, randomY, randomRadius, 'red',i+1);
    //Agrega el objeto al array
    arrayCircle.push(miCirculo);
    //Dibuja el objeto
    arrayCircle[i].draw(ctx);

}


/* let miCirculo = new Circle (100, 100, 50, "blue", "Tec");
miCirculo.draw(ctx);

let miCirculo2 = new Circle (270, 270, 50, "black", "Pachuca");
miCirculo2.draw(ctx); */
