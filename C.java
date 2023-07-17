import java.util.*;
class A{
    A(){
        System.out.println("A");
    }
}
class B extends  A{
    B(){
        System.out.println("B");
    }
}
class C extends B {
    int arr[]=new int[5];
    IntArr(){
        for(int i:arr){
            i=0;
        }
        System.out.println("C");
    }
    void display(){
        java.util.Arrays.sort(arr);
    }
    public static void main(String[] args){
        C arr=new C();
        arr.display();
    }
}
