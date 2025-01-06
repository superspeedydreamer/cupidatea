function chunkArray(array, chunkSize) {
    // Initialize an empty array to hold the chunks
    let chunks = [];

    // Loop through the array, slicing it into chunks
    for (let i = 0; i < array.length; i += chunkSize) {
        let chunk = array.slice(i, i + chunkSize);
        chunks.push(chunk);
    }

    // Return the array of chunks
    return chunks;
}

// Sample array of numbers
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Specify the chunk size
let chunkSize = 3;

// Get the array of chunks
let chunks = chunkArray(numbers, chunkSize);

// Count the number of chunks
let chunkCount = chunks.length;

// Display the chunks and the chunk count
console.log('Chunks:', chunks);
console.log('Number of chunks:', chunkCount);
