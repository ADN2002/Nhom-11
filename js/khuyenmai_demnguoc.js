

	var countDownDate = new Date("July 24, 2022 23:59:59").getTime();
 	var x = setInterval(function() {
 	
	var now = new Date().getTime();
 
    var distance = countDownDate - now;
 
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	if(days < 10){
		days = "0" + days;
	}
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	if(hours<10){
		hours = "0" + hours;
	  }
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	if(minutes < 10){
		minutes =  "0" + minutes;
	  }
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
	if(seconds < 10){
		  seconds = "0" + seconds;
	  }
    document.getElementById("ngay").innerHTML = days;
	document.getElementById("gio").innerHTML = hours;
	document.getElementById("phut").innerHTML = minutes;
	document.getElementById("giay").innerHTML = seconds;
	 
  }, 1000);
