/* TODO: retrieve the value from the text input */
var mytextbox = document.getElementById('textinput'),phoneNum, displayedNum, cursor;;
function myKeyPress(e){
  mytextbox.addEventListener('input', inputChanged);
};
function inputChanged(e){
    displayedNum = e.target;
    phoneNum = e.target.value;
    cursor = e.target.selectionEnd;//Cursor specifies the index of the character after the selection(current input)
    console.log(cursor);//This displays the index of the character after the selection       
    phoneNum = e.target.value;
    console.log("the value from the text input: "+phoneNum);  
    /* end TODO */
    /* TODO:  Use replace function to ignore extra - character and all other non-digit characters in the imput*/
    phoneNum = phoneNum.replace(new RegExp(/[^\d]/g), ''); // Remove every non-digit character 
    console.log("Key Pressed (real phone number)= "+phoneNum);//displays UNFORMATTED phoneNum, which ignores all non-digit characters
};  /* end TODO */


   