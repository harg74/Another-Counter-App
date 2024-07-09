let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function decrement() {
    if(count<=0 && saveEl.textContent!=''){
        countEl.textContent=0
        count = 0
    }else{
        count -= 1
        countEl.textContent = count
    }
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

function refresh() {
    countEl.textContent=0
    saveEl.textContent='Previous entries: '
    count = 0
    let totalEl = document.getElementById('total-el');
    if (totalEl) {
        totalEl.remove();
    }
}

function getTotal() {
    const saveEl = document.getElementById('save-el');
    const text = saveEl.textContent.replace('Previous entries: ', '');
    console.log(text)
    const numbers = text.split(' ')
                        .filter(num => num) // Remove any empty strings
                        .map(num => parseInt(num.replace('-', ''), 10)) // Remove - and convert to number
                        .filter(num=>!isNaN(num));
    console.log(numbers)
    const total = numbers.reduce((sum, num) => sum + num, 0);
    console.log(total)
    return total;
}

function displayTotal() {
    const total = getTotal();

    // Check if the element already exists
    let totalEl = document.getElementById('total-el');
    if (!totalEl) {
        // Create a new element if it doesn't exist
        totalEl = document.createElement('p');
        totalEl.id = 'total-el';
        totalEl.textContent = `Sum: ${total}`;

        // Append the new element to the container
        const container = document.querySelector('.container');
        container.appendChild(totalEl);
    } else {
        // Update the text content if it already exists
        totalEl.textContent = `Sum: ${total}`;
    }
}


