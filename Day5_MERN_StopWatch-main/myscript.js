let timer = false;
let hr = 00;
let min = 00;
let sec = 00;
let ms = 00;
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let millisecs = document.getElementById("millisecs");


function start(){
	event.preventDefault();
	
	let action = document.activeElement.value;

	if(action === "Start") {
		timer = true;
		startStopWatch();
	}
	if(action === "Stop"){
		stopStopWatch();
	}
	if(action === "Resume"){
		resumeStopWatch();
	}
	if(action === "Reset"){
		resetStopWatch();
	}
}


function startStopWatch(){
	if(timer){
		ms ++;
		if(ms === 100) {
			sec ++;
			ms = 0;
		}
		if(sec === 60) {
			min ++ ;
			sec = 0;
		}
		if(min === 60) {
			hr ++;
			min = 0;
		}
		let hrStr = hr;
		let minStr = min;
		let secStr = sec;
		let msStr = ms;
		if( ms < 10) {
			msStr = "0" + ms;
		}
		if(sec < 10) {
			secStr = "0" + sec;
		}
		if(min < 10) {
			minStr = "0" + min;
		}
		if(hr < 10){
			hrStr = "0" + hr;
		}

		hours.innerHTML = hrStr;
		minutes.innerHTML = minStr;
		seconds.innerHTML = secStr;
		millisecs.innerHTML = msStr;
		setTimeout(startStopWatch, 10);
	}
}

function stopStopWatch(){
	console.log("stop invoked");
	timer = false;
}

function resumeStopWatch(){
	console.log("resume invoked");
	timer = true;	
	startStopWatch();
}

function resetStopWatch(){
	console.log("reset invoked");
	timer = false;
	hr = 0;
	min = 0;
	sec = 0;
	ms = 0;
	hours.innerHTML = "00";
	minutes.innerHTML = "00";
	seconds.innerHTML = "00";
	millisecs.innerHTML = "00";	
}