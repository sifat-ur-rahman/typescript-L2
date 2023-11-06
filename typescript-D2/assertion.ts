{
//type assertion

const kgToGm = (value : string | number) :string|number|undefined =>{
    if (typeof value === 'string') {
        const convertedValue = parseFloat(value)*1000
        return `The converted Value is: ${convertedValue}`
    }
    if (typeof value === 'number') {
        return value*1000
    }
}

const result1 = kgToGm(50) as number
const result2 = kgToGm('100') as string













//
}