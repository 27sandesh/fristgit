
var obj = {

    val: 100
    
    }
    
    function fun(a){
    
    console.log(this.val + a)
    
    }
    
    fun().call(obj)

    
    
    
