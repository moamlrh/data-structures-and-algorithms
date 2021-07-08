class Graph {
    constructor(){
        this.nodeLnegth = 0
        this.adjacentList ={ 
/**
    0: [1,2,3]
 */
        }
    }
    addVertx(node){
        if(!this.adjacentList[node]) {
            this.adjacentList[node] = []
        }
        return this.adjacentList;
    }
    addEdge(node1,node2){
        this.adjacentList[node1].push(node2) 
        this.adjacentList[node2].push(node1) 
    }
}


const graph = new Graph()

graph.addVertx('0')
graph.addVertx('1')
graph.addVertx('2')
graph.addVertx('3')
graph.addEdge('0', '3')
graph.addEdge('3', '1')
graph.addEdge('3', '4')
console.log(graph)