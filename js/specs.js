/*
Describe: encrypt()
Test: "It takes a string and returns a string"
Expect(encrypt("Have a nice day. Feed the dog & chill out!")).toEqual("Have a nice day. Feed the dog & chill out!");

Test: "It returns a lowercase string"
Expect(encrypt("Have a nice day. Feed the dog & chill out!")).toEqual("have a nice day. feed the dog & chill out!");

Test: "It returns a string with all spaces and punctuation removed"
Expect(encrypt("Have a nice day. Feed the dog & chill out!")).toEqual("haveanicedayfeedthedogchillout");

Test: "It returns a string in groups of 5 characters separated by a space"
Expect(encrypt("Have a nice day. Feed the dog & chill out!")).toEqual("havea niced ayfee dthed ogchi llout")

Test: "It places the individual characters (without spaces) in an array modeling a grid"
Expect(encrypt("Have a nice day. Feed the dog & chill out!")).toEqual([[havean], [iceday], [feedth], [edogch], [illout]])

Test: "It concatenates the first character of each nested array, then the second and so on, to return a cipher of the string in the format of spec 4"
Expect(encrypt("Have a nice day. Feed the dog & chill out!")).toEqual("hifei acedl veeol eddgo aatcu nyhht")
*/