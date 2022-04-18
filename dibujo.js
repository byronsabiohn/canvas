var text = document.getElementById("text_line");
var button = document.getElementById("button");
button.addEventListener("click", dibujoPorClick);


var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");


// while(l < lineas) 
// {
//     yi = 10 * l;
//     xf = 10 * (l + 1);
//     dibujarLinea(color1, 0, yi, xf, 300);
//     console.log("Linea " + l);
//     l++;
// }



function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) 
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

    function dibujoPorClick()
    {
            
            var lineas = parseInt(text.value);;
            var l = 0; 
            var yi, xf; 
            var color1 = "blue"
            var espacio = ancho / lineas

                for (l = 0; l < lineas; l++) 
            {
                    yi = espacio * l;
                    xf = espacio * (l + 1);
                    dibujarLinea(color1, 0, yi, xf, 300);
                    console.log("Linea " + l);

            }


        dibujarLinea(color1, 1, 1, 1, 300);
        dibujarLinea(color1, 1, 299,299,299);
    }







