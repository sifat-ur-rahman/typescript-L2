"use strict";
{
    //Learn spread operator 
    const bros1 = ['Mir', 'Firoz', 'Mizan'];
    const bros2 = ['Nahid', 'Rakib', 'Rahat'];
    bros1.push(...bros2);
    const mentors1 = {
        typescript: 'Mizba',
        redux: 'Mir',
        dbms: 'Mizba'
    };
    const mentors2 = {
        prisma: 'Firoz',
        next: 'Tanmoy',
        cloud: 'Nahid'
    };
    const mentorsList = Object.assign(Object.assign({}, mentors1), mentors2);
    //rest operator
    const greetFriends = (...friends) => {
        friends.forEach((friend) => console.log(`Hi ${friend}`));
    };
    greetFriends('abul', 'putul', 'Mir');
}
