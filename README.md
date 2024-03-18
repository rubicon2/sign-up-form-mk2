In 2024 went back and fixed a few errors and mistakes in this project. 

Learned something interesting about patterns/regex on form inputs: I was trying to allow the use of either a dash or a space with [ -]. However, after much messing around I found that the prescence of [-] within a pattern expression just breaks it, and causes the whole pattern to be ignored completely. 

As far as https://regex101.com/ is concerned, the use of [-] is fine, and matches the - character. However, if there is another character on the either side of the -, e.g. [#-\`] then it will match any character within the range of a hash (index 35) and a \` (index 96). I can only conclude that the hyphen is disallowed from the input field pattern due to the likely confusion it may cause, for example if someone accidentally matches a range when they meant to match one in a set of characters that just happens to include a hyphen.
