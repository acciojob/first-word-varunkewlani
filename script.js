function firstWord(s) {
	/*s=s.trim()
	let a=''   
	for(let i=0;i<s.length;i++)
		{
			if(s[i]==' ' || s[i]=='')
				return a
			else
				a+=s[i];
		}
	return a */
	s=s.trim()
	let a=s.indexOf(' ')
	if(a==-1)
		return s
	return s.substring(0,a)
  // your code here
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
