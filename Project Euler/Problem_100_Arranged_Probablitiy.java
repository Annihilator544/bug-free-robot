public class Problem_100_Arranged_Probablitiy {
    public static void main(String[] args){
        long begin = System.currentTimeMillis();
        long b = 15;
        long n = 21;
        while(n < 1000000000000L){
            long temp = 3*b + 2*n - 2;
            n = 4*b + 3*n - 3;
            b = temp;
        }
        System.out.println(b);
        long end = System.currentTimeMillis();
        System.out.println(end - begin + "ms");
    }
}
