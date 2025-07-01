function count(){	
	event.preventDefault();
	let input = document.getElementById("input");
	let str = document.getElementById("str");
	let count = document.getElementById("count");
	let word = document.getElementById("word");

	let text = input.value;
	let strText = str.value;
	strText = strText.split("").sort().join("");
	
	let words = [];	
	let limit = text.length - strText.length + 1;	
	console.log(text);
	console.log(strText);
	console.log(limit);	

	for(let i=0;i<limit;i++){
		let subStr = text.substring(i,i+strText.length).split("").sort().join("");
		
		if(subStr === strText){
			words.push("'"+ text.substring(i,i+strText.length) + "'");
		} 
	}
	console.log(words);
	if(words.length===0){
		count.innerHTML = "There are no anagrams in the given string";
	} else {
		count.innerHTML = "There are " + words.length +" anagrams in the string";
		word.innerHTML = "Anagrams of the word " + str.value + "  are : " + words;
	}
}


function check(){
	event.preventDefault();
	let str1 = document.getElementById("str1");
	let str2 = document.getElementById("str2");
	let msg1 = document.getElementById("msg1");
	console.log(msg1);
	if(str1.value.trim() === ""){
		alert("Word cannot be blank spaces.");
		str1.value="";
		msg1.innerHTML = "";
		str1.focus();
		return ;
	}
	if(str2.value.trim() === ""){
		alert("Word cannot be blank spaces.");
		str2.value="";
		msg1.innerHTML = "";
		str2.focus();
		return ;
	}

	let s1 = str1.value.split("").sort().join("");
	let s2 = str2.value.split("").sort().join("");

	if(s1 === s2){
		msg1.innerHTML = "They are anagrams of each other";
	} else {
		msg1.innerHTML = "They are not anagrams of each other";
	}

}










