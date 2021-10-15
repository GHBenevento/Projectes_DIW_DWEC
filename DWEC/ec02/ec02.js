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
        document.getElementById("answer").innerHTML = newTxt;
    }else{
        isEmpty();
    }}

    function countA(){

    txt = document.getElementById("inp").value;

    if (txt!==""){

        cont = 0;

        for(i = 0; i < txt.length; i++){

            if( txt.charAt(i).toLowerCase() === "a"){
                cont++;
            }
        }
        
        document.getElementById("answer").innerHTML = "There are "+ cont +" A's";

    }else{
        isEmpty(); 
    }}

    function firstA(){

        txt = document.getElementById("inp").value;

        if (txt !== ""){

        if(txt.charAt(0)=== "a"){

            document.getElementById("answer").innerHTML = "The first character is an 'A'";

        }else{

            count=0;

            for (i = 1; i < (txt.length+1); i++) {

                if(txt.charAt(i).toLowerCase() === "a"){

                    newTxt = txt.substring(0,i);
                    document.getElementById("answer").innerHTML = newTxt;
                    i = txt.length;

                }else{
                    count++
                }
            }

            if( count === txt.length){

                document.getElementById("answer").innerHTML = "There are no A's"
            }

        }}else{
            isEmpty();
        }
    }

    function firstAndLast(){

        txt = document.getElementById("inp").value;

        if (txt !== ""){
            
        }
    }