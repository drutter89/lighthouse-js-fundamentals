var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

counter = 0;
while(counter <= ingredients.length){
  console.log(ingredients);
  ingredients ++;
}
// Write a for loop that prints out the contents of ingredients:

for (var i=8;i <= ingredients.length; i++){
  console.log(ingredients);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:

for (var i=8;i <= ingredients.length; i++){
  console.log(ingredients.reverse());
}