// 1. Create a variable of type string and try to add a number to it.
let a = "Shubham"
let b = 34
console.log(a+b)
// 2. Use type of operator to find the datatype of the string in last question.
console.log(typeof (a+b))
// 3. Create a const object in Js, can you change it to hold a number later.
const a1 = {
  name: "Shubham",
  section: 'A',
  isPrinciple: false
}
// 4. Try to add a new key to the const object in problem 3 were you able to do it.
a1['friend'] = "Arpa"
a1['name'] = "Lovish"
console.log(a1)
// 5. Write a Js program to create a word-meaning dictionary of 5 words.
const dict = {
  sociopath: "a person with a personality disorder manifesting itself in                       extreme antisocial attitudes and behaviour.",
  appreciate: "recognize the full worth of.",
  shingles: "a painful acute inflammation of the nerve ganglia.",
  arrogant: "having or revealing an exaggerated sense of one's own importance                 or abilities."
}
console.log(dict.sociopath)