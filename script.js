function mincost(arr)
{ 
//write your code here
// return the min cost

	arr.sort();

	let ans =0;

  
	  
	for(let i=0;i<arr.length-1;i++)
	{
	 
	  let temp=(arr[i]+arr[i+1]);
		ans+= (arr[i]+arr[i+1]);
		arr[i+1]=temp;
		
	}
  
    
	   return ans;
  
}

module.exports=mincost;
