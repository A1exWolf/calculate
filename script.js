let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let screenValue= "";
for(let item of buttons) {
    item.addEventListener('click', (e) =>{
         let buttonText = e.target.innerHTML;
        //console.log(buttonText)

        if (buttonText==='X'){
            buttonText ="*";
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText==='AC'){
            screenValue=" ";
            screen.value = screenValue;
        }
        else if (buttonText==='='){
            screen.value = eval(screenValue);
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}