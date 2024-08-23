// Define the array of products
let produse = [
    { type: 'programming', price: 15, html: document.getElementById('cpp'), name: 'C++ Programming Courses' },
    { type: 'programming', price: 20, html: document.getElementById('java'), name: 'Java Programming Courses' },
    { type: 'programming', price: 19, html: document.getElementById('js'), name: 'JavaScript Programming Courses' },
    { type: 'programming', price: 900, html: document.getElementById('assembly'), name: 'Assembly Language Programming Courses' },
    { type: 'programming', price: 30, html: document.getElementById('python'), name: 'Python Programming Courses' },
    { type: 'programming', price: 25, html: document.getElementById('ruby'), name: 'Ruby Programming Courses' },
    { type: 'programming', price: 30, html: document.getElementById('lua'), name: 'Lua Programming Courses' },
    { type: 'programming', price: 28, html: document.getElementById('php'), name: 'PHP Programming Courses' },
    { type: 'programming', price: 22, html: document.getElementById('go'), name: 'Go Programming Courses' },
    { type: 'programming', price: 27, html: document.getElementById('swift'), name: 'Swift Programming Courses' },
    { type: 'programming', price: 35, html: document.getElementById('kotlin'), name: 'Kotlin Programming Courses' },
    { type: 'programming', price: 45, html: document.getElementById('rust'), name: 'Rust Programming Courses' },
    { type: 'programming', price: 57, html: document.getElementById('sql'), name: 'SQL Programming Courses' }
];
const minRange = document.getElementById('minRange');
const maxRange = document.getElementById('maxRange');
// Function to get checkbox values
function getFilterValues() {
    return {
        programming: document.getElementById('programming').checked,
        cooking: document.getElementById('cooking').checked,
        languages: document.getElementById('languages').checked,
        math: document.getElementById('math').checked,
        
    };
}

// Function to check if a product matches the selected filters
function matchesFilters(product, filters) {
    // Type filters
    if (filters.programming && product.type !== 'programming') return false;
    if (filters.cooking && product.type !== 'cooking') return false;
    if (filters.languages && product.type !== 'languages') return false;
    if (filters.math && product.type !== 'math') return false;

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