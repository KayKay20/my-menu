const food = {'burgers': 25.00, 'large chips':15.00, 'pizza':35.00, 'sushi': 45.99, 'ribs': 145.99, 'mac and cheese':66.00 }
const  drink ={'coke':14.00, 'fanta':20.00, 'milkshake': 25.00, 'sprinkling water': 15.00, 'tea':30.00, 'coffee': 30.00} 
let bill = 0;

function myFood(){
  let string = ""
  for(var foods in food){
    string+=(foods + ':' +'R' + food[foods] + "\n" )
  }
 const choices = prompt(string);
 bill+= food[choices];

}

function myDrink(){
  let string = "";
  for (var drinks in drink){
    string+= (drinks + ':' + 'R' + drink[drinks] + "\n")
  }
  const choices = prompt(string);
  bill += drink[choices];

}

function Bill(){
  alert('Your bill is R' + bill); 



}