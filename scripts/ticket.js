const allBtn = document .getElementsByClassName("add-btn");
let count = 0;
let seat = 40;
for(const btn of allBtn){
    btn .addEventListener("click",function( e ){
        count =count +1;
        seat = seat -1;
        const seatName = e .target.parentNode.childNodes[1].innerText;
        console.log( e .target.parentNode.childNodes[1].innerText);





        setInnerText("seat-count",count);
        setInnerText("seat-left",seat);
        e .target .style .backgroundColor = "rgb(29, 209, 0)";
        
        
    });
}

//function handleSelect( event ){
//    
//    
//   // document.getElementById("seat-detail").addEventListener("click", handleSelect);
//
//   //
//   
//   
//   const seatName = event .target.parentNode.childNodes[1].innerText;
//   
//}
//
//
function setInnerText(id,value){
    document .getElementById (id) . innerText =value;
}