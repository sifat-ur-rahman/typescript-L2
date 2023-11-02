function add(num1:number, num2:number):number {
    return num1 + num2
}

add(2,6)




const addSum = (num1:number, num2:number):number => num1 + num2

addSum(5,10)


//object -into-> function --> method

const newUser ={
    name : 'putul',
    age : 17,
    addAge(age : number):string {
        return `His new age is: ${this.age + age}`
    }
}


const arr : number[]= [1,2,3]
const numArr : number[]= [5,8,3]

const newArr = arr.map((elem:number):number => elem*elem)