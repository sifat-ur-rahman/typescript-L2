{
    //

    type commonType = string|number
    
    const add =(param1 :commonType , param2 : commonType):commonType =>{

        if (typeof param1 === 'number' && typeof param2 === "number") {
            return param1+ param2
        } else {
            return param1.toString() + param2.toString()
        }
        
    }

const result = add("20",10)
console.log(result)



    //
}