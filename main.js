var dataset = [80, 100, 56, 120, 180, 30, 40, 120, 260];


var svgLargura = 500; 
var svgAltura = 300
var barPadding = 5;
var barWidth = (svgLargura / dataset.length);


var svg = d3.select('svg')
    .attr("width", svgLargura)
    .attr("height", svgAltura);
    
var barras = svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("y", function(d) {
        // monta altura das barras de acordo com o valor de cada atributo do array 
         return svgAltura - d 
    })
    .attr("height", function(d) { 
      // monta a altura de cada barra 
        return d; 
    })
    .attr("width", barWidth - barPadding) // monta a largura de cada barra 
    .attr("transform", function (d, i) {
        var translate = [barWidth * i, 0]; 
        debugger;
        var xCoordenada = barWidth * i;
        return "translate("+ xCoordenada +")";
    });