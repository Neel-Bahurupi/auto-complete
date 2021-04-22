console.log("hi");

export { Trie }

class TrieNode{
    constructor(){
        this.child = Array(26).fill(null);
        this.isEnd = false;
        this.number = null;
        this.name = null;
    }
}

class Trie{
    constructor(){
        this.root = new TrieNode();
        // this.current = this.root;

        let dummy = [
            ["geek","12345"],
            ["geeks","22222"],
            ["geeking","99999"]
        ]

        for(let i=0;i<dummy.length;i++){
            this.add(dummy[i][0],dummy[i][1])
        }
    }

    add(name,number){
        let current = this.root;
        // console.log(this.root);
        for(let i=0;i<name.length;i++){
            let index = name.charCodeAt(i) - 97;
            
            if(current.child[index]==null){
                current.child[index] = new TrieNode();
            }
            current = current.child[index];
        }
        current.isEnd = true;
        current.number = number;
        current.name = name;
    }

    search(name,pos=0){
        let current = this.root;
        
        for(let i=0;i<name.length;i++){
            let index = name.charCodeAt(i) - 97;
            
            if(current.child[index]==null){
                return false;
            }
            current = current.child[index];
        }
        console.log(current.number);
        return true;
    }

    findAll(node,res){
        if(node===null){
            return;
        }
        
        for(let i=0;i<26;i++){
            if(node.child[i]!=null && node.child[i].isEnd === true){
                res.push([node.child[i].name , node.child[i].number])
                // console.log(node.child[i].number);
            }
            this.findAll(node.child[i],res);
        }
        return res;
    }

    find(name,res){
        let current = this.root;
        for(let i=0;i<name.length;i++){
            let index = name.charCodeAt(i) - 97;
            
            if(current.child[index]==null){
                return;
            }
            current = current.child[index];
        }
        if(current.isEnd === true){
            res.push([current.name , current.number])
        }
        return this.findAll(current,res);
    }
}





