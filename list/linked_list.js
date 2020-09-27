class LinkedListNode{
    constructor(data){
        this.data = data
        this.next = null
    } 
}

class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }

    isEmpty(){
        return this.size == 0
    }

    insert(value){
        //if list is empty
        if(this.isEmpty())
            this.head = new LinkedListNode(value)
        else{
            let tmp = this.head
            this.head = new LinkedListNode(value)
            this.head.next = tmp
        }
        this.size++
    }

    remove(value){
        let current = this.head

        //if head is target
        if(current.data == value){
            this.head = current.next
            this.size--
        }
        else{
            let prev = current
            while(current.next){
                if(current.data == value){
                    prev.next = current.next
                    current = current.next
                    break
                }
                prev = current
                current = current.next
            }

            if(current.data == value)
                prev.next = null
            this.size--
        }
    }

    removeHead(){
        let data = null
        if(this.head != null){
            data = this.head.data
            this.head = this.head.next
            this.size--
        }
        return data
    }

    find(value){
        let current = this.head
        while(current.next){
            if(current.data == value) return true
            current = current.next
        }
        return false
    }
    print(){
        let result = ""
        let current = this.head
        while(current.next){
            result += `${current.data} -> `
            current = current.next
        }
        result += current.data
        console.log(result)
    }
}

(function test(){
    let ll = new LinkedList()
    for(let i =1; i<=5; i++) ll.insert(i)
    ll.print()
    ll.remove(3)
    ll.print()
    ll.remove(5)
    ll.print()
})()