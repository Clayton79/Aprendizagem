#include <iostream>
using namespace std;

// https://pt.cppreference.com/w/cpp/language/types
// https://www.geeksforgeeks.org/c-sharp-data-types/

int main () {

    bool isAdmin = true; // true false 0 1 
    cout << isAdmin << endl;

    //char symbol = "#";
    char symbol('#');
    cout << symbol << endl;

    // datatype modifiers
    // signed unsigned long short 
    unsigned short int age = 31;
    cout << age << endl;

    float pi = 3.14; // 32 bits - single precision floating point type
    const double PI = 3.141592; // 64 bits - double precision floating point type
    cout << pi << endl;
    cout << PI << endl; 
    
    // datatype modifiers
    // signed unsigned long apart 
    short int n1 = 1;
    long int n2 = 1; 
    unsigned int n3 = 1;
    long long int n4 = 1;
    cout << n1 + n2 + n3 + n4 << endl;

    cout << sizeof(char) << "byte" << endl; 
    cout << sizeof(char16_t) << "byte" << endl; 
    cout << sizeof(char32_t) << "byte" << endl; 
    cout << sizeof(wchar_t) << "byte" << endl; 
    cout << sizeof(int) << "byte" << endl; 
    cout << sizeof(long int) << "byte" << endl; 
    cout << sizeof(long long int) << "byte" << endl; 
    cout << sizeof(float) << "byte" << endl; 
    cout << sizeof(double) << "byte" << endl; 

    return 0;
}