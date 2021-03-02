class HashTable {
    constructor() {
        this.size = 10;
        this.values = Array(this.size)

        for (let i = 0; i < this.values.length; i++) {
            this.values[i] = new Map()
        }
    }
    hash = key => {
        let hashed = 0;
        for (let i = 0; i < key.length; i++) {
            hashed += key.charCodeAt(i)
        }
        return hashed % this.size;
    }
    insert(key, value) {
        const idx = this.hash(key)
        this.values[idx].set(key, value)
    }
    delete(key) {
        const idx = this.hash(key);
        return this.values[idx].delete(key)
    }

    search(key) {
        const idx = this.hash(key)
        return this.values[idx].get(key)
    }
}


const hash = new HashTable()
hash.insert(1, 'moaml')
hash.insert(2, 'riad')
hash.insert(3, 'hussein')
console.log(hash.search(1))
hash.delete(2)
console.log(hash)
