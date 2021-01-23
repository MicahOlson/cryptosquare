# Cryptosquare

### _This project was created solely for the education of the author(s) and is not in a complete or portfolio-ready state. It should not be considered representative of professional work._
\
[Epicodus](https://www.epicodus.com/) - [Introduction to Programming](https://www.learnhowtoprogram.com/introduction-to-programming) - [Week 3, Lesson 32](https://www.learnhowtoprogram.com/introduction-to-programming/arrays-and-looping/practice-roman-numerals)
\
Date created: 2021-01-22

## Authors and Contributors
Authored by: Micah L. Olson

## Description
_Practice: Cryptosquare_  
A goal of this exercise is to practice test-driven development (TDD) to break a project down into specs, or tests, and write code to pass each test one at a time, building up from the last. Additionally, various looping techniques should be utilized.

## Technologies Used
* HTML5
* Bootstrap 4.5.3
* JavaScript (extended by jQuery 3.5.1)

## Tests
```
Describe: encrypt()
Test: "It takes a string and returns a string"
Expect(encrypt("Have a nice day. Feed the dog & chill out!")).toEqual("Have a nice day. Feed the dog & chill out!");

Test: "It returns a lowercase string"
Expect(encrypt("Have a nice day. Feed the dog & chill out!")).toEqual("have a nice day. feed the dog & chill out!");

Test: "It returns a string with all spaces and punctuation removed"
Expect(encrypt("Have a nice day. Feed the dog & chill out!")).toEqual("haveanicedayfeedthedogchillout");

Test: "It returns a string in groups of 5 characters separated by a space"
Expect(encrypt("Have a nice day. Feed the dog & chill out!")).toEqual("havea niced ayfee dthed ogchi llout");

Test: "It places the individual characters (without spaces) in an array modeling a grid"
Expect(encrypt("Have a nice day. Feed the dog & chill out!")).toEqual([[havean], [iceday], [feedth], [edogch], [illout]]);

Test: "It concatenates the first character of each nested array, then the second and so on, to return a cipher of the string in the format of spec 4"
Expect(encrypt("Have a nice day. Feed the dog & chill out!")).toEqual("hifei acedl veeol eddgo aatcu nyhht");
```

## License
[GPLv3](https://choosealicense.com/licenses/gpl-3.0/)\
Micah L. Olson &copy; 2021

## Contact
micah.olson@protonmail.com