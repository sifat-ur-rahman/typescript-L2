{
    //Constraints in typescript
const getTodo = async()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/4')
    const data = await response.json()
    console.log(data)
}

getTodo()

    //
}