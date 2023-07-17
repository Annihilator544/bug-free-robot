import java.util.*;
public class Problem_10_Summation_of_primes {
    
    static void primeSummation(int i){
        ArrayList<Integer> Prime=new ArrayList<Integer>();
        Prime.add(2);
    for(int j=3;j<i;j++){
        int flag=0;
        for(int x:Prime){
            if(x%j==0){
                flag=1;
                break;
            }
        }
        if(flag==0){
            Prime.add(j);
        }
    }
    long sum=0;
    if(sum!=0){
        sum=0;
    }
    for(int k:Prime){
        sum+=k;
    }
    System.out.println(sum);
}
public static void main(String[] args){
    primeSummation(2000000);
}
}
