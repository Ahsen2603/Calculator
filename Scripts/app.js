let buttons = document.querySelector('.buttons');
let btn = buttons.querySelectorAll('span');
let value = document.getElementById('value');

for(let i=0; i<btn.length; i++){
    btn[i].addEventListener('click', function(){
        if(this.innerHTML == "="){
            value.innerHTML = eval(value.innerHTML);    //I have made use of the eval function to help make my code compact.
        } else {                                        //This creates ease for myself to code and decouple the programme.
            if(this.innerHTML=='Clear'){                //It also allows for dynamic operations to occur.
                value.innerHTML = "";
            } else {
                value.innerHTML += this.innerHTML;
            }
        }
    })
}