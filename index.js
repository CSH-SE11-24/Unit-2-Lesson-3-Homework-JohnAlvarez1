// In this homework, you will be building a "hangman" game. 
 // Create a new variable and put a random word in
let word = "kitty"

// Create a new variable called attempts and set it to 0
let attempt = 0

// Prompt the user to guess a letter
 let GuessLetter = prompt("Guess a leter")

// Write an if statement that uses the includes() method to check if the letter is in the word -- Google the syntax!
// Tell the user if their letter is in the word
if(word.includes(GuessLetter)){
  console.log("\n\nYou guessed a letter right\n")
} else {
  console.log("\n\nYou got it wrong\n")
} 
// Prompt the user to guess the word 
let GuessWord = prompt ("Guess the word")

// Increase attempts by 1
attempt++

// Write an if/else statement that checks if the user guess is equal to your word and tells the user
if(GuessWord === word){
  console.log("\n\nYou guessed the word!\n")
}else{
  console.log("\n\nYou did not guessed the word right\n")
}


// Now we will combine this input a while loop!
// Create a while loop that runs while the user guess is not equal to the word
while(GuessWord !== word){
  GuessWord = prompt("Take another guess on the letter.")
 if(word.includes("guess a letter:")){
   console.log("\nYou guessed a letter.\n")
 }else{
   console.log("\nThat letter is not in the word\n")
 }
  GuessWord = prompt ("Now guess the word")
  if(GuessWord === word){
    console.log("\nYou guessed the word\n")
  }else{
    console.log("\nYou did not get the word right.")
  }
  attempt++
}
console.log("It took you ", attempt, "to guessed the word")

// In the while loop, copy the prompt and if/else check for a letter

// In the while loop, copy the prompt and if/else check for the word


// In the while loop, copy the attempts increment



// After the while loop, print "It took (attempts) attempts" 

