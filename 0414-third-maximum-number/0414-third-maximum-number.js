/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let maxi1= -Infinity
    let maxi2= -Infinity
    let maxi3= -Infinity

    for(let i=0;i<nums.length;i++){
        if(maxi1==nums[i]||maxi2==nums[i]||maxi3==nums[i]) continue
        if(nums[i]>maxi1){
            maxi3=maxi2
            maxi2=maxi1
            maxi1=nums[i]
        }else if(nums[i]>maxi2 && nums[i]<maxi1){
            maxi3=maxi2
            maxi2=nums[i]
        }else if(nums[i] > maxi3 && nums[i]<maxi2){
            maxi3=nums[i]
    }
    
 
}
return maxi3 == -Infinity?maxi1:maxi3
};