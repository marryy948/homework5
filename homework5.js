// 1. find method

function findItem(fn) {
    const res = []
    for (let i = 0; i < this.length; i++) {
        const resOfFn = fn(this[i], i, this)
        if (resOfFn) {
            res.push(this[i])
            break
        }
        
    }
    return res
}

arr.findItem = findItem


// 2, map method

function mapImp(fn) {
    const res = []
    for (let i = 0; i < this.length; i++) {
        res.push(fn(this[i], i, this))
        
    }
    return res
}


//3. findIndex method

function impFindIndex(fn) {
    const res = []
    for (let i = 0; i < this.length; i++) {
        const resOfFn = fn(this[i], i, this)
        if (resOfFn) {
            res.push(i)
            break
        }
    }
    return res
}