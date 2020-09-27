class Stack{
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

    push(val){
        this.arr.push(val)
    }

    pop(){
        return this.arr.pop()
    }

    top(){
        return this.arr[this.arr.length-1]
    }
}

function getStackNthTop(stack, n){
    if(n <=0) throw 'error'

    var copy = new Stack(stack.copy())
    while(--n != 0) copy.pop()
        
    return copy.pop()
}

function search(stack, element){
    var copy = new Stack(stack.copy())

    while(!copy.isEmpty()){
        if(element == copy.pop()) return true
    }

    return false
}

function test(){
    var stack = new Stack()
    console.log(stack)
    //stack: empty
    
    for(var i=1; i<=5; i++)
        stack.push(i)
    console.log(stack)
    //stack: [1,2,3,4,5]

    stack.pop()
    console.log(stack)
    //stack: [1,2,3,4]

    console.log("top: " + stack.top())
    //top: 4

    console.log("2nd top: " + getStackNthTop(stack, 2))
    //2nd top: 3 

    console.log("seacrh 1: " + search(stack, 1)) //true
    console.log("seacrh 5: " + search(stack, 5)) //false
}

test()