function isEmpty(){

    txt = document.getElementById("inp").value;

    answer.innerHTML = "This string is not empty";

    if (txt===""){
        document.getElementById("answer").innerHTML = "This string is empty";
    }        
}

function reverseString(){

    txt = document.getElementById("inp").value;

    if (txt!==""){
        newTxt = txt.split("").reverse().join("");
    }    

    document.getElementById("answer").innerHTML = newTxt;
    }

    function countA(){

    txt = document.getElementById("inp").value;

    counter = 0;

    if (txt!==""){
        for(i = 0; i = txt.length; i++){
            if( txt.charAT(i)==="a"){
                counter++
            }
        }
    }

    document.getElementById("answer").innerHTML = "There are "+ counter + " A's";
        
    }