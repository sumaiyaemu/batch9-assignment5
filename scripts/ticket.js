document .getElementById("buy-ticket").addEventListener("click" ,function(){
    document .location = "#select-seat";
});

const allBtn = document .getElementsByClassName("add-btn");
let count = 0;
let seat = 40;
for(const btn of allBtn){
    btn.addEventListener("click", function(e){
        count =count +1;
        seat = seat -1;
        setInnerText("seat-count",count);
        setInnerText("seat-left",seat);
        e .target .style .backgroundColor = "rgb(29, 209, 0)";
        
        
    });
}


function ticket(){
    hideElementById ('seat-detail');
    hideElementById ('select-seat');
    showElementById ('success');

}


function setInnerText(id,value){
    document .getElementById (id) . innerText =value;
}





