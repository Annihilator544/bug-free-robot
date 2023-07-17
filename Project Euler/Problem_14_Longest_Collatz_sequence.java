public class Problem_14_Longest_Collatz_sequence {
    static long function (long j, long count){
        
        if(j==1){
            count++;
            return count;
        }
        else if (j%2==0){
            j=j/2;
            count ++;
            return function(j,count);
        }
        else{
            j=3*j+1;
            count ++;
            return function(j,count);
        }
    }
    static long longestCollatzSequence(long k){
        long max=0;
        long num=0;
        for(long i=1;i<=k;i++){
            long e=function(i,0);
            if(max<e){
                max=e;
                num=i;
            }
        } 
        return num;
    }
    public static void main(String[]args){
        System.out.println( function(13,0));
       System.out.println( longestCollatzSequence(13));
       System.out.println( longestCollatzSequence(5847));
       System.out.println( longestCollatzSequence(46500));
       System.out.println( longestCollatzSequence(54512));
       System.out.println( longestCollatzSequence(100000));
       System.out.println( longestCollatzSequence(1000000));
    }
}
