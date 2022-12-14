const languages = [
	{
		name: "C",
		code: "c",
		defaultCode: `#include <stdio.h>
    
int main() {
   
   return 0;
}`,
	},
	{
		name: "C++",
		code: "cpp",
		backendCode: "cpp",
		defaultCode: `#include <iostream>
using namespace std;

int main() {
    
    return 0;
}`,
	},
	{
		name: "Java",
		code: "java",
		backendCode: "java",
		defaultCode: `class HelloWorld {
    public static void main(String[] args) {
        
    }
}`,
	},
	{
		name: "Python",
		code: "python",
		backendCode: "py",
		defaultCode: "# Your Python code goes here",
	},
	{
		name: "Go",
		code: "go",
		backendCode: "go",
		defaultCode: `package main

import "fmt"

func main() {
    
}`,
	},
	{
		name: "C#",
		code: "csharp",
		backendCode: "cs",
		defaultCode: `namespace Hello World
{
    class Hello {         
        static void Main(string[] args)
        {
            
        }
    }
}`,
	},
	{
		name: "NodeJS",
		code: "javascript",
		backendCode: "js",
		defaultCode: "// Your NodeJS code goes here",
	},
];

export default languages;
