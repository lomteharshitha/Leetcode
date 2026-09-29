/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let map1= new Map()
    let map2=new Map()
    for(let char of s){
        map1.set(char,(map1.get(char) ||0)+1)
    }
    for(let char of t){
        map2.set(char,(map2.get(char)||0)+1)
    }
    for(let [key,value] of map2){
        if(!map1.has(key)) return false
        else if(value!=map1.get(key)) return false
   else if(map1.size!=map2.size) return false
    }
    return true
};