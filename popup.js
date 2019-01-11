function AnimeList(text){
	var dom = new DOMParser().parseFromString(text, "text/html");
	console.log(dom);
	var table = dom.getElementById('recent-posts-6');
	var links = table.getElementsByTagName('a');
	console.log(links);
	for (let l of links){
		console.log(l);
		l.setAttribute('target','_blank');
	}
	return table;
}

var xhttp = new XMLHttpRequest();
xhttp.open('GET', 'https://anime1.me/', true);
xhttp.onload = function(){
var div = document.getElementById('preview');
div.appendChild(AnimeList(this.responseText));
};
xhttp.send();
