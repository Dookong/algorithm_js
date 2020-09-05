function BSTNode(value){
    this.value = value
    this.left = null
    this.right = null
}

function BST(){
    this._root = null
}

BST.prototype.insert = function(value){
    let newNode = new BSTNode(value)

    //root is empty
    if(!this._root){
        this._root = newNode
        return this
    }

    //root already exists
    let current = this._root

    while(current){
        //overlap
        if(value == current.value) return
        //left
        if(value < current.value){
            if(!current.left){
                current.left = newNode
                break
            } 
            current = current.left
        }
        //right
        if(value > current.value){
            if(!current.right){
                current.right = newNode
                break
            } 
            current = current.right
        }
    }
}

BST.prototype.traversPreOrder = function(){
    function traverse(node){
        if(!node) return
        console.log(node.value)
        traverse(node.left)
        traverse(node.right)
    }

    traverse(this._root)
}

BST.prototype.traversInOrder = function(){
    function traverse(node){
        if(!node) return
        traverse(node.left)
        console.log(node.value)
        traverse(node.right)
    }

    traverse(this._root)
}

BST.prototype.traversPostOrder = function(){
    function traverse(node){
        if(!node) return
        //if(node.left)
            traverse(node.left)
        //if(node.right)
            traverse(node.right)
        console.log(node.value)
    }

    traverse(this._root)
}

let test = ()=>{
    let tree = new BST()
    let values = [42,41,50,10,40,45,75]

    for(var i of values)
        tree.insert(i)

    tree.traversPreOrder()
    console.log("-----------")
    tree.traversInOrder()
    console.log("-----------")
    tree.traversPostOrder()
}

test()