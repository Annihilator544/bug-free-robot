import java.util.*;
import java.math.*;
class pp{
    static int sum(int n){
        int s=0;
        if(n>0)
            s=n%10+sum(n/10);
        return s;

    }
   public static void main(String []args){
    BigDecimal prev= new BigDecimal(0);
    BigDecimal next= new BigDecimal(1);
    BigDecimal ans= new BigDecimal(1);
    for(int i=3;i<=4;i++){
        BigDecimal fib= new BigDecimal(0);
        fib=fib.add(prev);
        System.out.println(fib);
        fib=fib.add(next.multiply(next));
        System.out.println(fib);
        prev=next;
        next=fib;
        System.out.println(fib);
        System.out.println(prev+"**");
        if(i==n){
            ans=fib;
        }
    }
        System.out.println(ans);
   }
}