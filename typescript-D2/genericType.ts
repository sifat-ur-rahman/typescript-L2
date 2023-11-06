{
    // generic Type

    type GenericArray<T> = Array<T>

    const rollNumber: Array<number> = [2, 4, 5]

    const rollNumber2: GenericArray<number> = [2, 4, 5]


    const name : Array<string> = ['sifat','putul']
    const name2 : GenericArray<string> = ['sifat','putul']



    interface User {

    name: string;
    age: number;
    }



    const user : GenericArray<User> =[
        {
            name: 'sifat',
            age: 24,
        },
        {
            name: 'putul',
            age:17 
        }
    ]






    //
}