var wrapper = document.querySelector('.wrapper');
var arr = '<button id="'+0+'">'+0+'</button>'; 
for(var i =0; i<9;i++){
    var count =  i + 1 
    var button = '<button id="'+count+'">'+ count+'</button>';
    var arr = arr + button;
}
wrapper.innerHTML = arr;