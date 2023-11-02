{
type User ={
    name : string;
    address : {
        city: string;
        road: string;
        presentAddress?: string

    }
}



const user : User ={
    name: 'putul',
    address:{
        city: 'khulna',
        road: '27 RN ',
        
    }
}
const newAddress = user?.address?.presentAddress ?? 'No present Address'

console.log({newAddress})






//
}