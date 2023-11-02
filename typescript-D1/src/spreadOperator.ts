{
    //Learn spread operator 

    const bros1:string[]=['Mir', 'Firoz', 'Mizan']
    const bros2:string[]=['Nahid', 'Rakib', 'Rahat']


    bros1.push(...bros2)

    const mentors1: {
        typescript: string;
        redux: string;
        dbms: string;
    } ={
        typescript:'Mizba',
        redux: 'Mir',
        dbms: 'Mizba'
    }
const mentors2: {
    prisma: string;
    next: string;
    cloud: string;
}= {
    prisma: 'Firoz',
    next: 'Tanmoy',
    cloud: 'Nahid'
}

const mentorsList : {
    prisma: string;
    next: string;
    cloud: string;
    typescript: string;
    redux: string;
    dbms: string;
}={
    ...mentors1,
    ...mentors2
}


//rest operator

const greetFriends = (...friends:string[])=>{
    friends.forEach((friend)=>console.log(`Hi ${friend}`))

}
    

greetFriends('abul','putul','Mir')





}

