import java.util.*;
public class IntArr {
    int arr[]=new int[5];
    IntArr(){
        for(int i:arr){
            i=0;
        }
    }
    void display(){
        java.util.Arrays.sort(arr);
    }
    public static void main (Strings[] args){
        IntArr array=new IntArr();
        array.display();
    }
}
