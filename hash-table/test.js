class HashTable {
    constructor(size) {
        this.data = new Array(size)
    }
    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash;
    }
    set(key, value) {
        const idx = this._hash(key)
        if (!this.data[idx]) this.data[idx] = []
        this.data[idx].push([key, value])
        return this.data
    }
    get(key) {
        const idx = this._hash(key)
        let curr = this.data[idx]
        if (curr) {
            for (let i = 0; i < curr.length; i++) if (curr[i][0] === key) return curr[i][1]
        }
        return false
    }
    key() {
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                if (this.data[i].length > 1) {
                    for (let x = 0; x < this.data[i].length; x++) {
                        console.log(this.data[i][x][0])
                    }
                } else {
                    console.log(this.data[i][0][0])
                }
            }
        }
    }
    values() {
        const res = []
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                if (this.data[i].length > 1) {
                    for (let j = 0; j < this.data[i].length; j++) {
                        if (res.push(this.data[i][j][1])) res.push(this.data[i][j][1])
                    }
                } else {
                    if (res.push(this.data[i][1])) res.push(this.data[i][1])
                }
            }
        }
        return res;
    }
}

const test = new HashTable(20)

console.log(test.set('name', 'Moaml Riad'))
console.log(test.set('name2', 'asdasdf'))
console.log(test.set('name3', 'ahmed ali'))
console.log(test.set('name5', 'mohammed ahmed'))
console.log(test.get('name4'))
console.log(test.get('name'))
console.log(test.key())
console.log(test.values())