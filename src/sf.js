Element.prototype.addEventListeners = function(events, f) {
    for (event of events) {
     this.addEventListener(event,f);
    }
};

(function () {
 var ls = document.querySelectorAll(".spamfree"); 
 console.log(ls);
 for (l of ls) {
 	console.log(l);
 	l.addEventListeners(["touchstart","click"], function (){ 
  	var n = this.getAttribute('data-sfname');
    var d = this.getAttribute('data-sfdomain');
    var f = "mailto:" + n + "@" + d;
    this.setAttribute('href', f );
  });
 }
  console.log("ran the spamfree link thingy");
})();