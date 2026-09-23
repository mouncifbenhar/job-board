export function pagnation(number,limit,array){
    const start = (number - 1) * limit
    const end = number * limit
    const items = array.slice(start,end)
    return items
}

