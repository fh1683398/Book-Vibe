//get data from the local storage
export const getStoredReadBooks = () => {

    const storedBook = localStorage.getItem("readBooks")
    
    if (storedBook) {
        return (JSON.parse(storedBook))
    }
    return []
}

export const getWishListBooks = () => {
    const storedBooks = localStorage.getItem("wishList")
     return storedBooks? JSON.parse(storedBooks) : []
}



//set data to the local storage
export const saveReadBooks =(id) => {
    const storedList = getStoredReadBooks()

    if(storedList.includes(id)){
        return;
    }
    else{
        storedList.push(id)

        localStorage.setItem("readBooks", JSON.stringify(storedList))
    }
}

export const saveWishList = (id) =>{
    const storedWishList = getWishListBooks()

    if(storedWishList.includes(id)){
        return;
    }else{
        storedWishList.push(id)
        localStorage.setItem("wishList", JSON.stringify(storedWishList))
    }
}