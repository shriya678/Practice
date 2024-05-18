function findVowel(string)
{
    let count=0;
    for(let i=0;i<string.length;i++) 
        {
           
        if(string.charAt(i)== "a"||string.charAt(i)=="e"||string.charAt(i)=="i"||string.charAt(i)=="o"||string.charAt(i)=="u")
        {
            count++;
        }
           
        }
        return count;
        
}

console.log(findVowel("riya"));
function findVowell(string) {
    let count = 0;
    const vowels = "aeiouAEIOU";
    for (let i = 0; i < string.length; i++) {
      if (vowels.includes(string.charAt(i))) {
        count++;
      }
    }
    return count;
  }
  
  console.log(findVowell("riya")); // Output: 2
  