class Queue{
    constructor(arr){
        this.arr = []
        if(arr) this.arr = arr
    }

    isEmpty(){
        return this.arr.length == 0
    }

    copy(){
        return this.arr.slice()
    }

    enqueue(val){
        this.arr.push(val)
    }

    dequeue(){
        return this.arr.shift()
    }

    front(){
        return this.arr[0]
    }
}

function getQueueNthFront(queue, n){
    if(n <=0) throw 'error'

    var copy = new Queue(queue.copy())
    while(--n != 0) copy.dequeue()

    return copy.dequeue()
}

function search(queue, element){
    var copy = new Queue(queue.copy())

    while(!copy.isEmpty()){
        if(element == copy.dequeue()) return true
    }

    return false
}

function test(){
    var queue = new Queue([1,2,3,4,5])
    console.log(queue) //queue: [1,2,3,4,5]

    queue.dequeue() 
    console.log(queue) //queue: [2,3,4,5]

    queue.enqueue(6) 
    console.log(queue) //queue: [2,3,4,5,6]
    
    console.log("2nd front: " + getQueueNthFront(queue, 2)) //2nd front: 3
    console.log("search 2: " + search(queue, 2)) //true
    console.log("search 7: " + search(queue, 7)) //false
}

test()