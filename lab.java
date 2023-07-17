
public class lab {
int totalnumberofseats=2;
   public static void main(String[]args){
        lab w=new lab();
        Reserve r=new Reserve();
        Cancelled c= new Cancelled();
        int i=10;
        while(i>0){
            r.start(w);
            c.start(w);
            i++;
        }
   }
}
class Reserve extends Thread{
    public void start(lab obj){
        obj.totalnumberofseats--;
        System.out.println("one Seat Booked");
        System.out.println("Remaining Seats : "+ obj.totalnumberofseats);
    }
}
class Cancelled extends Thread{
    public void start(lab obj){
        System.out.println("Remaining Seats : "+ obj.totalnumberofseats);
        if(obj.totalnumberofseats==2){
            System.out.println("no seats Reserved");
        }
        else{
        obj.totalnumberofseats++;
        System.out.println("one Seat Cancelled");
        System.out.println("Remaining Seats : "+ obj.totalnumberofseats);
        }
    }
}