
var startbutton = document.getElementById("start");
var resultElement = document.getElementById("result");


var recognition = new webkitSpeechRecognition();

recognition.lang = window.navigator.language;
recognition.interimResults = true;

startbutton.addEventListener("click", () => {
  recognition.start();
});

recognition.addEventListener("result", (event) => {
  const result = event.results[event.results.length - 1][0].transcript;
  resultElement.textContent = result;


})




function deletData() {
  if (resultElement.textContent == "delete");
  {
    resultElement.textContent = "";
  }
}
var getdownload = document.getElementById("download")

function downloadData() {
  if (resultElement.textContent == "download");
  {
    resultElement.textContent = "";
    window.open("data:text/csv;charset=utf-8;base64," + encodeURIComponent(resultElement.textContent));
  }
}


/*var getdownload = document.getElementById("download")

getdownload.addEventListener("click", function (e) {
  var resultElement = document.getElementById("result").value;

  var filename = "output.txt";

  download(resultElement,filename)


});*/


function download(resultElement, filename) {
  var element = document.createElement('a');

  element.setAttribute('href', "data:text/plain;charset=utf-8," + encodeURIComponent(textareaval))

  element.setAttribute("getdownload", filename);

  element.style.display = "none";

  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);




}






