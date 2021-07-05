
var str;
var xslider;
const domainstart = -10;
const domainend = 10;

function plotgraph() {
    
    evaluate();
    console.log(result);  
}

function getSliderX() {
    xslider = document.getElementById("rangeX").value;
    //console.log(xslider);
    return xslider;
 }
 
function evaluate() {
    str = document.getElementById("function").value;
    getSliderX();
    let scope = {
        x: xslider*10,
        
    }
    const node = math.parse(str)
    const code = node.compile()
    result = code.evaluate(scope);
    
    return result;
}

