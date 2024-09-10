#include <cstdio>

int main () {
    // type identifier = value 
    double price = 99.80;

    // type identifier;
    double tax;
    tax = 0.08;
    tax = 0.09;

    // type identifier = exp;
    double finalPrice = price * (1 + tax);

    printf ("The Final price is %.2f.\n", finalPrice);
    
    return 0;
}