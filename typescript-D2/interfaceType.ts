{
    //interface

    interface User {
        name: string;
        email: string;
        age: number
    }


    interface UserWithRole extends User { role ?: string}

    const user : UserWithRole ={
        name : 'sifat',
        email: 'sifat@gmail.com',
        age: 24,
        role: 'student'
    }

// array interface

    interface Roll {
        [index : number] : number
    }

    const rollNumber : Roll =[1,2,3]

// function interface
    interface Add {
        (num1:number, num2:number):number
    }

    const add :Add =(num1, num2) => num1+num2



    //
}