async function createpost(){
try{
    let response = await fetch('https://jsonplaceholder.typicode.com/posts',{
        method:"POST",
        body:JSON.stringify({
            title: 'New Post',
            body:"andhi",
            userId:1

        }),
        headers:{
            "Content-type": "application/json; charset=UTF-8"
        }

    });
    let data = await response.json();
    console.log(data)
}catch(error){
    console.log('Error',error)

}
}
createpost();