/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s,left=0,right=s.length-1) {
   if(left >= right){
        return s 
    }
        [s[left],s[right]] = [s[right],s[left]]
    return  reverseString(s,left+1,right-1)
};