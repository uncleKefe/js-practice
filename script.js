function bulb(value){
    let image;
    if(value == 1){
        image= "lightbulb.jpg"

    }else{
        image = "lightbulb-on.jpg"
    }
    document.getElementById("bulb").src=image;
}

 function bulbon(){
     let bulbobj = document.querySelector(".bulboff");
     bulbobj.setAttribute("src", "lightbulb-on.jpg");
 }

function bulboff(){
     let bulbobj = document.querySelector(".bulboff");
     bulbobj.setAttribute("src", "lightbulb.jpg");
}

//  function submit(text) {
//      let information = document.getElementById("form");
//      if(text== )

//  }


let daddy = "Kefe  Ijama";

function rex(text) {
    let daddyk = text.repeat(5);
    console.log(daddyk);
}
rex(daddy);