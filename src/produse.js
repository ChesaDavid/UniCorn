// Define the array of products
let produse = [
    { type: 'programming', price: 15, html: document.getElementById('cpp'), name: 'C++ Programming Courses' ,whole: true},
    { type: 'programming', price: 20, html: document.getElementById('java'), name: 'Java Programming Courses' ,whole: true},
    { type: 'programming', price: 19, html: document.getElementById('js'), name: 'JavaScript Programming Courses' ,whole: true},
    { type: 'programming', price: 900, html: document.getElementById('assembly'), name: 'Assembly Language Programming Courses' ,whole: true},
    { type: 'programming', price: 30, html: document.getElementById('python'), name: 'Python Programming Courses' ,whole: true},
    { type: 'programming', price: 25, html: document.getElementById('ruby'), name: 'Ruby Programming Courses' ,whole:true},
    { type: 'programming', price: 30, html: document.getElementById('lua'), name: 'Lua Programming Courses' ,whole:true},
    { type: 'programming', price: 28, html: document.getElementById('php'), name: 'PHP Programming Courses' ,whole:true},
    { type: 'programming', price: 22, html: document.getElementById('go'), name: 'Go Programming Courses' ,whole:true},
    { type: 'programming', price: 27, html: document.getElementById('swift'), name: 'Swift Programming Courses' ,whole:true},
    { type: 'programming', price: 35, html: document.getElementById('kotlin'), name: 'Kotlin Programming Courses' ,whole:true},
    { type: 'programming', price: 45, html: document.getElementById('rust'), name: 'Rust Programming Courses' ,whole:true},
    { type: 'programming', price: 57, html: document.getElementById('sql'), name: 'SQL Programming Courses' ,whole:true},
    { type: 'school', price:50, html: document.getElementById('math'), name:'Math Lesson' ,whole:false},
    { type:'language', price:65, html: document.getElementById('english'), name:'English',whole:false},
    { type:'language',price:70, html: document.getElementById('french'),name:'French lessons',whole:false},
    { type:'language', price:75, html: document.getElementById('spanish'),name:'Spanish lessons',whole:false},
    { type:'language', price:80, html: document.getElementById('german'),name:'German lessons',whole:false},
    { type:'language', price:85, html: document.getElementById('russian'),name:'Russian lessons',whole:false},
    { type:'language', price:90,html: document.getElementById('chinese'), name:'Chinese lessons', whole:false},
    { type:'language', price:95, html: document.getElementById('hindi'), name: 'Hindi lessons', whole:false},
    { type:'language' ,price:100, html: document.getElementById('arabic'), name: 'Arabic lessons', whole:false},
    { type:'language' ,price:75, html: document.getElementById('italina'), name: 'Italian lessons', whole:false},
    { type:'language', price: 65, html: document.getElementById('japanese'), name: 'Japanese lessons',whole:false},
    { type:'language' ,price:55 , html: document.getElementById('ukrainan'), name:'Ukrainian lessons', whole:false},
    { type:'language', price:60, html: document.getElementById('romanian'), name: 'Romanian lessons',whole:false},
    { type:'language', price:50, html: document.getElementById('korean'), name: 'Korean lessons', whole:false},
    { type:'language', price:45, html: document.getElementById('norwigian'), name: 'Norwegian lessons',whole:false},
];
const minRange = document.getElementById('minRange');
const maxRange = document.getElementById('maxRange');
// Function to get checkbox values
function getFilterValues() {
    return {
        programming: document.getElementById('programming').checked,
        cooking: document.getElementById('cooking').checked,
        languages: document.getElementById('languages').checked,
        math: document.getElementById('science').checked,
        social: document.getElementById('social').chacked,
        whole: document.getElementById('whole').checked,
        hour: document.getElementById('hour').checked
    };
}

// Function to check if a product matches the selected filters
function matchesFilters(product, filters) {


    // Type filters
    if (filters.programming && product.type !== 'programming'){
        if(filters.cooking && product.type === 'school'){
            
        }else if(filters.languages && product.type === 'language'){
            
        }else if(filters.math && product.type === 'science'){

        }else if(filters.social && product.type === 'social'){

        }else{
            return false;
        }
    }
    if (filters.cooking && product.type !== 'school'){
        if(filters.programming && product.type === 'programming'){
            
        } else if(filters.languages && product.type === 'language'){
            
        } else if(filters.math && product.type === 'science'){
            
        } else if(filters.social && product.type ==='social'){
            
        } else{
            return false;
        }
    }
    if (filters.languages && product.type !== 'language'){
        if(filters.programming && product.type === 'programming'){
            
        } else if(filters.cooking && product.type === 'school'){
            
        } else if(filters.math && product.type === 'science'){
            
        } else if(filters.social && product.type === 'social'){
            
        } else{
            return false;
        }
    }
    if (filters.math && product.type !== 'science'){
        if(filters.programming && product.type === 'programming'){
            
        } else if(filters.cooking && product.type === 'school'){
            
        } else if(filters.languages && product.type === 'language'){
            
        } else if(filters.social && product.type === 'social'){
            
        } else{
            return false;
        }
    }
    if(filters.social && product.type !== 'social'){
        if(filters.programming && product.type === 'programming'){
            
        } else if(filters.cooking && product.type === 'school'){
            
        } else if(filters.languages && product.type === 'language'){
            
        } else if(filters.math && product.type === 'science'){
            
        } else{
            return false;
        }
    }
    if(filters.whole){
        if(filters.hour){
            filters.hour = false;
            filters.whole = false;
        }
    }
    if(filters.whole && !product.whole){
        if(filters.hour && product.whole){

        }else{
            return false;
        }
    }

    if(filters.hour && product.whole){
        if(filters.whole && !product.whole){

        }else{
            return false;
        }

    }
    
    if(product.price < minRange.value || product.price>maxRange.value){return false;}

    return true;
}

// Main function to filter and display products
function filterProducts() {
    const filters = getFilterValues();

    produse.forEach(product => {
        if (matchesFilters(product, filters)) {
            product.html.style.display = 'block';
        } else {
            product.html.style.display = 'none';
        }
    });
}

// Set up the event listener for the filter button
let filterBtn = document.getElementById('filtreaza');
filterBtn.addEventListener('click', filterProducts);


    const minPrice = document.getElementById('min-price');
    const maxPrice = document.getElementById('max-price');
    const rangeTrack = document.getElementById('rangeTrack');

    function updateSlider() {
      const minValue = parseInt(minRange.value);
      const maxValue = parseInt(maxRange.value);
      
      // Ensure that minRange value is always less than or equal to maxRange
      if (minValue > maxValue - 1) {
        minRange.value = maxValue - 1;
      }
      
      // Ensure that maxRange value is always greater than or equal to minRange
      if (maxValue < minValue + 1) {
        maxRange.value = minValue + 1;
      }

      // Update the displayed prices
      minPrice.textContent = `${minRange.value} Ron`;
      maxPrice.textContent = `${maxRange.value} Ron`;

      // Update the range track background between the thumbs
      const minPercent = (minRange.value / minRange.max) * 100;
      const maxPercent = (maxRange.value / maxRange.max) * 100;

      rangeTrack.style.left = `${minPercent}%`;
      rangeTrack.style.width = `${maxPercent - minPercent}%`;
    }

    // Event listeners for both sliders
    minRange.addEventListener('input', updateSlider);
    maxRange.addEventListener('input', updateSlider);

    // Initialize the slider
    updateSlider();