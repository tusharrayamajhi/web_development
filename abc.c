#include<stdio.h>
int main()
{
    int unit;
    printf("Enter electricity Unit");
    scanf("%d",&unit);
    int amt;
    if(unit <= 100){
        amt = unit * 5;
    }else if(unit > 100 && unit <=300){
        amt = (100 * 5) + ((unit - 100) * 7 );
    }else{
        amt = (100 * 5) + (200 * 7) + ((unit - 300) * 9);
    }
    printf("Total amount = %d ",amt);
    return 0;
}
