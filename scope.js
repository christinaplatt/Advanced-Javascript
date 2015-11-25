var cat = "I'm Sammy";

function catscope() {
	cat = "I'm Charlie";
	console.log(cat)
}

console.log(cat);

catscope();

console.log(cat);