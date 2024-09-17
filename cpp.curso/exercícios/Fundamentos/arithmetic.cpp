#include <iostream>
using namespace std;

int main () {

    // binary and infix 

    cout << 2 + 2 + 10 << endl;
    cout << 2 - 2 << endl;
    cout << 2 * 2 << endl;
    cout << 2 / 2 << endl;
    cout << 10 % 3 << endl;
    cout << 10 + 3 * 7 << endl;
    cout << (10 + 3) * 7 << endl; 

    int x;
    int y;

    cout << "Enter a number: ";
    cin >> x;

    cout << "Enter a number: ";
    cin >> y;

    cout << "Result:" << endl;
    cout << x + y << endl;
    cout << x - y << endl;
    cout << x * y << endl;
    cout << x / y << endl;
    cout << x % y << endl;

    return 0;
}