var text = "No text"
function GenWords(yes){
	if (yes == "yes"){
		text = "Hello World!"
	} else {
		return 0;
	}
}

function FinishGen(){
	if (text == "Hello World!"){
		text = "Hello, World!"
	} else {
		return 0;
	}
}

GenWords("yes")
FinishGen()
console.log(text)
