
var str; //string from the input field
var xslider; //xslider data
var yslider; //yslider data
var result;
var datax = [];
var datay = [];
var dataz = [];


//onclick plot button function
function plotgraph() {
    evaluate();  
    //console.log(result);
    
}

//returns value of xslider
function getSliderX() {
    xslider = document.getElementById("rangeX").value;
    return xslider;
 }

 //returns value of yslider
 function getSliderY() {
    yslider = document.getElementById("rangeY").value;
    return yslider;
 }


 
function evaluate() {
    getSliderX();
    getSliderY();
    let minX = -10*xslider; //domainstart
    let maxX = 10*xslider; //domainend
    str = document.getElementById("function").value;
    
    for(let i=minX;i<maxX;i++){
        xslider = xslider*2;
        yslider = xslider*2;
        let scope = {   //scope for evaluation of function
            x: xslider,
            y: yslider,
        }
        const parser = math.parse(str)
        const compile = parser.compile()
        result = compile.evaluate(scope);
        console.log(`x= ${scope.x} , y=${scope.y}`);
        datax.push(scope.x); //data pushed 
        datay.push(scope.y); //data pushed
        console.log(`z= ${result}`);
        dataz.push(result); //data pushed
           
    }
    return result;
    
}





