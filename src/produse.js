function searchFunction() {
    const input = document.getElementById('searchBar').value.toUpperCase();
    
   
    
}
let filterBtn = document.getElementById('filtreaza');

filterBtn.addEventListener('click',filterBtnClickHandler);

function filterBtnClickHandler() {
    var programming = document.getElementById('programming');
    var cooking = document.getElementById('cooking');
    var languages = document.getElementById('languages');
    var math = document.getElementById('math');
    
    var almostFree = document.getElementsById('almostFree');
    var cheap = document.getElementsById('cheap');
    var expensive = document.getElementsById('Expensive');
    var aGoodPrice = document.getElementsById('aGoodPrice');
    var almostExpensive = document.getElementsById('almostExpensive');
    //when is checked then it is shown 
    
    if(programming.checked == true){
        
    }
}

// let filters = document.getElementById('filters');
// let afterFilter = document.getElementById('afterFilter');
// let back = document.getElementById('filtreaza');
// let filter = document.getElementById('filtreaza');
// filter.addEventListener('click', function(){
//     if(filter.style.background === 'green'){
//         filter.style.background = 'white';
//         filters.style.display = 'block';
//     }
//     else{
//         filter.style = ;
//         filters.style.display = 'none';
//     }
// });