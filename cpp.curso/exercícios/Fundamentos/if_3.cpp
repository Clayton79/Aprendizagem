#include <iostream>
using namespace std;

 // 3 numeros usuarios 60 30 140 solicitar
int main () {

    int Num1,Num2,Num3;

    cout << "Diga um numero: ";
    cin >> Num1;

    cout << "Diga um numero: ";
    cin >> Num2;

    cout << "Diga um numero: ";
    cin >> Num3;

    if(Num1 >= Num2  && Num1 >= Num3) {
        cout << Num1 << endl;
    }

    if(Num2 >= Num1  && Num2 >= Num3) {
        cout << Num2 << endl;
    }

    if(Num3 >= Num1 && Num3 >= Num2) {
        cout << Num3 << endl;
    }
        return 0;
}