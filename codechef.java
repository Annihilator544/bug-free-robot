/* package codechef; // don't place package name! */

import java.util.*;
import java.lang.*;
import java.io.*;

/* Name of the class has to be "Main" only if the class is public. */
class Codechef
{
	public static void main (String[] args) throws java.lang.Exception
	{
		// your code goes here
		Scanner sc=new Scanner(System.in);
	    int x=sc.nextInt();
	    int y=sc.nextInt();
        ArrayList<ArrayList<Integer>> arr = new ArrayList<>();
        arr.add();
        arr.get(0).add(sc.nextInt());
        arr.get(0).add(sc.nextInt());
        int count=1;
        while(y>1){
            int a=sc.nextInt();
            int b=sc.nextInt();
            int flag=0;
            for(int i=0;i<arr.size();i++){
                for(int j=0;j<arr.get(i).size();j++){
                    if(a==arr.get(i).get(j)){
                        arr.get(i).add(b);
                        flag=1;
                    }
                    else if(b==arr.get(i).get(j)){
                        arr.get(i).add(a);
                        flag=1;
                    }
                }
            }
            if(flag==0){
                arr.get(arr.size()-1).add(a);
                arr.get(arr.size()-1).add(b);
            }
            y--;
        }
        if(arr.get(1).size()==0){
            System.out.println(0);
        }
        else{
            for(int q=0;q<arr.size();q++){
                count*=arr.get(q).size();

            }
            System.out.println(count);
        }
	}
}
