var dataset = [];                        //Initialize empty array
for (var i = 0; i < 25; i++) {           //Loop 25 times
    var newNumber = Math.random() * 30;  //New random number (0-30)
    dataset.push(newNumber);             //Add new number to array
}

var w = 600;
var h = 250;

var xScale = d3.scaleOrdinal().domain(d3.range(dataset.length));

var svg = d3.select("body")
	.append("svg")
	.attr("width",w)
	.attr("height",h)
svg.selectAll("rect")
	.data(dataset)
	.enter()
	.append("rect")
	.attr("x",function(d,i) { return i*(w/dataset.length)})
	//.attr("y",function(d) {return d*5})
	.attr("y",function(d) { return h-d*3})
	.attr("width",(w/dataset.length - 3))
	.attr("height",function(d) {return d*3})
	.attr("fill", function(d) {
		console.log(d)
		var n = (d*5) + ""
		return "rgb(0, 0, " + n.split(".")[0] + ")";
	})
	//.attr("fill", "rgb(0,0,80.0)")
svg.selectAll("text")
	.data(dataset)
	.enter()
	.append("text")
	.text(function(d){ return (d + "").split(".")[0]})
	.attr("x", function(d, i ){
		return i * (w / dataset.length);
	})
	.attr("y", function(d) { return h - d*4 + 30})
	.attr("font-family", "sans-serif")
	.attr("font-size", "11px")
	.attr("fill", "white")

