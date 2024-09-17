#include <iostream>
using namespace std;

int main () {
    
    double finalGrade;
    cout << "Enter the final grade: ";
    cin >> finalGrade;

    // statement or block of code 
    if(finalGrade >= 7) {
        cout << "Excellent grade." << endl;
        cout << "Congratulations!" << endl;
    }

    return 0;

}