/*In a game of Geekland there are there are N (N>1) robots standing in a straight line each one holding a gun and having some health. At time t = 0, all the robots start firing bullets from their gun at a rate of one bullet per second towards their right. Bullets are designed in such a way that they can travel any distance in one second.
You are also given a power array, power[i] denotes the power of each bullet of ith robot. Basically, if any robot j is hit by ith robot then j's power decreases by power[i]. If health of any robot becomes less than one then that robot dies and vanishes from that point and the next robot (if present) becomes the neighbour the of previous robot.
Given health and power of bullets of each robot, you need to tell minimum time in which N-1 robots will die (obviously the first robot will never die). */
class Main {
  public static void main(String[] args) {
    int[] health = { 4, 5, 2, 6};
    int[] power = {1,3,2,3};
    int n = health.length;
    int[] time = new int[n];
    int max = 0;
    for (int i = 0; i < n; i++) {
      time[i] = (int) Math.ceil((double) health[i] / power[i]);
      if (time[i] > max) {
        max = time[i];
      }
    }
    System.out.println(max);
  }
}