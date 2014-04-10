
window.onload = function()
{
	
	var color = "#0ff";
	var dibujar = SVG('divsvg').size("100%", 300);


	var posOrg = [[5,5], [5, 100],[5,50],[50,50],[50,5],[50,100]];

	var posDestino = [[5, 5], [100,5],[50, 5], [50, 100]];
   var continua = dibujar.polyline(posOrg).fill("none").stroke({width : 10});
	var animo = false;  

	
	nom_div("posLinea").addEventListener('click', function(event)
	{
		if(!animo)
		{
			continua.animate(7000).plot(posDestino);
		}
		else
		{
			continua.animate(5000).plot(posOrg);
		}
		animo = !animo;
	});
	function nom_div(div)
	{
		return document.getElementById(div);
	}
}