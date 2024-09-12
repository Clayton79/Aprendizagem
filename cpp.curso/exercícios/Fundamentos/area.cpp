#include <iostream>
using namespace std;

int main () {

    const double PI = 3.1415;
    double radius;

    cout << "Enter radius ";
    cin >> radius;
    
    double area = PI * radius * radius;
    cout << "Area is: " << area;

    

    return 0;
}