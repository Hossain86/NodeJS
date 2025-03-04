async function main(){
    const response = await fetch('https://dummyjson.com/posts');
    const data = await response.json();
    console.log(data);
}