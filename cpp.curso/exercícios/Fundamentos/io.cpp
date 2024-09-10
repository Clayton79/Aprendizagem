#include <iostream>
using namespace std;

int main () {

    // insertion operator
    cout << "Hi!\n";
    cout << 3.14 << endl;

    int x = 3;
    cout << x << endl;

    cout << "Enter your name: ";

    // extraction operator
    string name;
    cin >> name;

    // insertion operator
    cout << name;
    
    return 0;
}