

const calctemp =()=>{

const temp1value = parseInt(document.getElementById("temp1value").value);
// console.log(temp1value);

const temp1Name = document.getElementById('temperature1');
const temp1type = temperature1.options[temp1Name.selectedIndex].value;
// console.log(temp1type);

const temp2Name = document.getElementById('temperature2');
// console.log(temp2Name);
const temp2type = temperature2.options[temp2Name.selectedIndex].value;
// console.log(temp2type);
if(temp1type === temp2type){
    temp2value.value = temp1value;
    console.log("Same");
}
else if(temp1type == "cel"){
    if(temp2type == "farehn"){
        temp2value.value = (( temp1value * 9/5) + 32).toFixed(2);
    }
    else if(temp2type == "kel"){
        temp2value.value = (( temp1value + 273.15)).toFixed(2);
    }
}
else if(temp1type == "farehn"){
    if(temp2type == "cel"){
        temp2value.value = ((temp1value - 32) * 5/9 ).toFixed(2);
    }
    else if(temp2type == "kel"){
        temp2value.value = ((temp1value - 32) * 5/9 + 273.15 ).toFixed(2);
    }
}
else if(temp1type == "kel"){
    if(temp2type == "cel"){
        temp2value.value = (temp1value- 273.15 ).toFixed(2);
    }
    else if(temp2type == "farehn"){
        temp2value.value = ((temp1value - 273.15) * 9/5 + 32 ).toFixed(2);
    }
}
}

let temp2value = document.getElementById('temp2value');
let result;

const btn = document.getElementById('convertBtn')
btn.addEventListener('click',calctemp)

