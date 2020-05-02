/* TODO: retrieve the value from the text input */
var mytextbox = document.getElementById('textinput');
function myKeyPress(e){
  mytextbox.addEventListener('input', inputChanged);
};
function inputChanged(e){
    phoneNum = e.target.value;
    console.log("the value from the text input: "+phoneNum);  
};
 /* end TODO */


