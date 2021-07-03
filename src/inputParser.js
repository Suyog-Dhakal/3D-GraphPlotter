
function plotgraph() {

    funcinp = document.getElementById("function").value;
    funcinp.trim();
    if (funcinp.includes("sin")) {                                     
        funcinp = funcinp.replaceAll("sin", "Math.sin");
    };
    if (funcinp.includes("cos")) {                                     
        funcinp = funcinp.replaceAll("cos", "Math.cos")
    };
    if (funcinp.includes("tan")) {                                     
        funcinp = funcinp.replaceAll("tan", "Math.tan")
    };
    if (funcinp.includes("^")) {                                       
        funcinp = funcinp.replaceAll("^", "**")
    };
    if (funcinp.includes("sqrt")) {                                     
        funcinp = funcinp.replaceAll("sqrt", "Math.sqrt")
    };
    if (funcinp.includes("pi")) {                                    
        funcinp = funcinp.replaceAll("pi", "Math.PI")
    };
    if (funcinp.includes("e")) {                                       
        funcinp = funcinp.replaceAll("e", "Math.E")
    };
    if (funcinp.includes("atan")) {                                       
        funcinp = funcinp.replaceAll("atan", "Math.atan")
    };
    if (funcinp.includes("acos")) {                                       
        funcinp = funcinp.replaceAll("acos", "Math.acos")
    };
    if (funcinp.includes("asin")) {                                       
        funcinp = funcinp.replaceAll("asin", "Math.asin")
    };
    if (funcinp.includes("abs")) {                                       
        funcinp = funcinp.replaceAll("abs", "Math.abs")
    };
    if (funcinp.includes("cbrt")) {                                      
        funcinp = funcinp.replaceAll("cbrt", "Math.cbrt")
    };
    if (funcinp.includes("log")) {                                       
        funcinp = funcinp.replaceAll("log", "Math.log")
    };
    if (funcinp.includes("ln")) {                                       
        funcinp = funcinp.replaceAll("ln", "Math.log")
    };
    if (funcinp.includes("log10")) {                                      
        funcinp = funcinp.replaceAll("log10", "Math.log10")
    };
    if (funcinp.includes("Sgn")) {                                      
        funcinp = funcinp.replaceAll("Sgn", "Math.sign")
    };

    
    console.log(eval(funcinp));
  
}

