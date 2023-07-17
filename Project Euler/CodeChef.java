/* package codechef; // don't place package name! */

import java.util.*;

/* Name of the class has to be "Main" only if the class is public. */
class Codechef
{
	public static void main (String[] args) throws java.lang.Exception
	{
		// your code goes here
		Scanner sc=new Scanner(System.in);
	    int x=sc.nextInt();
		sc.close();
	    while(x-->0){
	        char k=sc.next().charAt(0);
	        if(k=='b'||k=='B'){
	            System.out.println("BattleShip");
	        }
	        else if(k=='c'||k=='C'){
	            System.out.println("Cruiser");
	        }
	        else if(k=='d'||k=='D'){
	            System.out.println("Destroyer");
	        }
	    }
	}
}