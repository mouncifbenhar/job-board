async function getData() {

    try{
        const response = await fetch("../data/offers.json")
        const data = response.json()
        return data
    }catch(error){
        return []
    }
    
}

export const offers = await getData();
