export function getWl() {
    let x;
    try {
        x = JSON.parse(localStorage.getItem('watchlist'))
    } catch(error) {
        return []
    } 
    return x
}

export function setWl(x) {
    localStorage.setItem('watchlist', JSON.stringify(x))
}

export function getCl() {
    let x;
    try {
        x = JSON.parse(localStorage.getItem('completedlist'))
    } catch(error) {
        return []
    } 
    return x
}

export function setCl(x) {
    localStorage.setItem('completedlist', JSON.stringify(x))
}

export function addtoWl(movie) {
    let watchlist = getWl()
    let newWl;
    if(watchlist !== null) newWl = [...watchlist, movie]
    else newWl = [movie]
    setWl(newWl)
}

export function addtoCl(movie) {
    let completedlist = getCl()
    let newCl;    
    if(completedlist !== null) newCl = [...completedlist, movie]
    else newCl = [movie]
    setCl(newCl)
}

export function delfromWL(movie) {
    let watchedlist = getWl()
    let newWl = watchedlist.filter(i => i.imdbID !== movie.imdbID)
    setWl(newWl)
}

export function delfromCL(movie) {
    let completedlist = getCl()
    let newCl = completedlist.filter(i => i.imdbID !== movie.imdbID)
    setCl(newCl)
    localStorage.setItem(movie.imdbID, null)
}

export function setRev(movie ,rev) {
    localStorage.setItem(movie.imdbID, JSON.stringify(rev))
}

export function getRev(movie) {
    let x;
    try {
        x = JSON.parse(localStorage.getItem(movie.imdbID))
    } catch(error) {
        return null
    } 
    return x
}

export function modalOpen() {
    document.getElementById("blur").style.display = "block"
    document.getElementById("ratingmodal").style.top = "20%"
    document.getElementById("ratingmodal").style.opacity = "1.0"
    document.getElementById("ratingmodal").style.pointerEvents = "auto"
    document.getElementById("ri").focus()
}

export function modalClose() {
    document.getElementById("blur").style.display = "none"
    document.getElementById("ratingmodal").style.top = "50%"
    document.getElementById("ratingmodal").style.opacity = "0.0"
    document.getElementById("ratingmodal").style.pointerEvents = "none"
    document.getElementById("ri").blur()
}