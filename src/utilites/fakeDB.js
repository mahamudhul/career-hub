const addToDb = id => {
    let jobsCart = {}

    const storedCart = localStorage.getItem('jobsCart')
    if (storedCart) {
        jobsCart = JSON.parse(storedCart)
    }

    const quantity = jobsCart[id]
    if (quantity) {
        const newQuantity = quantity + 1
        jobsCart[id] = newQuantity
    } else {
        jobsCart[id] = 1
    }
    localStorage.setItem('jobsCart', JSON.stringify(jobsCart))
}


const getStoredCart = () => {
    let jobsCart = {}

    const storedCart = localStorage.getItem('jobsCart')
    if (storedCart) {
        jobsCart = JSON.parse(storedCart)
    }
    return jobsCart
}



export { addToDb, getStoredCart }