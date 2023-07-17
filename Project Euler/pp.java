/* package codechef; // don't place package name! */

import java.util.*;

/* Name of the class has to be "Main" only if the class is public. */
class pp
{
	public static void main (String[] args) throws java.lang.Exception
	{ String s="a good   example";
		String [] words= s.split(" ");
	String p="";
	System.out.println(words.length);
	System.out.println(words[0]);
	System.out.println(words[1]);
	System.out.println(words[2]);
	System.out.println(words[3]);
	
	for(int i=(words.length-1);i>=0;i--){
		p+=words[i];
		if(i!=0){
		p+=" ";
		}
	}
	System.out.println(p);
		
    }
}