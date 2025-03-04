// Define an asynchronous function named 'main'.
async function main() {
    // Await the response from fetching data from the specified URL.
    const response = await fetch('https://dummyjson.com/posts');
    
    // Await the conversion of the response to JSON format.
    const data = await response.json();
    
    // Log the fetched data to the console.
    console.log(data);
}