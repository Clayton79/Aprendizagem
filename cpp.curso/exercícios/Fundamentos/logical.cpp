#include <iostream>
using namespace std;

int main () {
    double finalGrade;
    cout << "Enter the final grade: ";
    cin >> finalGrade;

    bool goodBehavior;
    cout << "Is he/she well-behaved ? ";
    cin >> goodBehavior;

    bool goodStudent = finalGrade >= 9 && goodBehavior;
    bool averageStudent = finalGrade >= 9 != goodBehavior;
    bool badStudent = finalGrade <= 3 && !goodBehavior;
    bool loanCancelled = finalGrade <= 3 || !goodBehavior;

    cout << "Good student ? " << goodStudent << endl;
    cout << "Average student ? " << averageStudent << endl;
    cout << "Bad student ? " << badStudent << endl;
    cout << "Will the loan be cancelled ? " << loanCancelled << endl;

    // AND (&&)
    cout << "AND (&&)..." << endl;
    cout << (true && true) << endl; // 1
    cout << (true && false) << endl; // 0 
    cout << (false && true) << endl; // 0 
    cout << (false && false) << endl; // 0

    // OR (||)
    cout << "OR (||)..." << endl;
    cout << (true || true) << endl; // 1
    cout << (true || false) << endl; // 1
    cout << (false || true) << endl; // 1
    cout << (false || false) << endl; // 0
    
    // XOR (^ !=)
    cout << "XOR (^)..." << endl;
    cout << (true ^ true) << endl; // 1
    cout << (true ^ false) << endl; // 0
    cout << (false ^ true) << endl; // 0
    cout << (false ^ false) << endl; // 1

    // NOT (!)
    cout << "NOT (!)..." << endl;
    cout << (!true) << endl; // 0
    cout << (!false) << endl; // 1
    cout << (!!true) << endl; // 1
    
    return 0;
}