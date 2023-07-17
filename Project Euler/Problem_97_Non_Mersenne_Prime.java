public class Problem_97_Non_Mersenne_Prime {
    public static void main(String[] args){
        long begin = System.currentTimeMillis();
        long n = 1;
        for(int i = 0; i < 7830457; i++){
            n*=2;
            n%=10000000000L;
        }
        n*=28433;
        n%=10000000000L;
        n+=1;
        System.out.println(n);
        long end = System.currentTimeMillis();
        System.out.println(end - begin + "ms");
    }
}
