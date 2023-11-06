{
    //Function With Generics
const createArray = <T> (param: T): T[] =>{
    return [param]
}

const result1 = createArray<string>('Bangladesh')


type User = { id:number; name: string }
const result2 = createArray<User>({id:200, name: 'sifat'})















    //
}