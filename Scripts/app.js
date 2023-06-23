let buttons = document.querySelector('.buttons');    // This query selects the relevant classes assigned
let btn = buttons.querySelectorAll('span');            // This query selects the relevant classes assigned
let value = document.getElementById('value');        // This query selects the relevant classes assigned

for(let i=0; i<btn.length; i++){                        //
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
