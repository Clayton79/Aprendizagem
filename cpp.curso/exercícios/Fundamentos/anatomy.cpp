// Every line starting with # is a preprocessor directive
/*
    This is a directive that tells the preprocessor to 
    include the contents of file
*/

#include <iostream>


int main () {

    // How is a book organized ?

    // A code block is a grouping of one or more statements.
    {
        ; // a statement is a syntactic unit of an imperative programming language
        ;
    }

    std::cout
        <<
        "Hi There!"
        <<
        " Bye.";

    std::cout << "end!";
    return 0;
}