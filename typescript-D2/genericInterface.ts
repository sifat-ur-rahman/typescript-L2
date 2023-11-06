{//

    interface Developer<T> {
        name : string;
        computer : {
            brand : string;
            model : string;
            releaseYear : number
        }
        smartWatch: T
    }



    const newDeveloper : Developer<{
        brand :string;
        model : string
    }> ={
        name : 'sifat',
        computer : {
            brand : 'Dell',
            model : 'x-255',
            releaseYear: 2020
        },
        smartWatch : {
            brand : 'Dell',
            model : 'x-255',
            
        },
    }










//
}


