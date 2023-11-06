{
    //

    type NormalUser= {
        name : string
    }

    type AdminUser = {
        name : string;
        role: "admin"
    }

    const getUser = (user : NormalUser | AdminUser)=>{
        if ('role' in user) {
            
            console.log(`My name is ${user.name} amd my role is ${user.role}`)
        } else {
            console.log(`My name is ${user.name}`)
        }
    }












    //
}