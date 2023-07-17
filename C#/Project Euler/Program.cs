using System;

public class Class1
{
    int multiplesof3and5(int i)
    {
        int sum = 0;
        for (int j = 0; j < i; j++)
        {
            if (j % 3 == 0)
            {
                sum += j;
            }
            if (j % 5 == 0)
            {
                sum += j;
            }
            if (j % 15 == 0)
            {
                sum -= j;
            }

            return sum;
        }
    }
    public static void main(string[] args)
    {
        multiplesof3and5(49);
        multiplesof3and5(1000);
        multiplesof3and5(8456);
    }

}