/* task 1
1. Use querySelectorAll() to select all elements with the class item.
2. Change the second item’s text to "Updated Item 2".
3. Print the NodeList of items using console.log( ).
  answer*/

const elem = document.querySelectorAll('#elem li .btn');
console.log(elem);

elem[1].textContent = "updated content 2";
console.log(elem[1]);

/**task 2
1. Use JavaScript to select the <h1> element using getElementById( )
2. Change the content to "DOM Manipulation is Amazing!".
3. Print the modified element using console.log( )
 answer*/

const game = document.getElementById('flex');
console.log(game);

game.innerHTML = "DOM Manipulation is Amazing!"
console.log(game);

/* task 3
1. Use JavaScript to select the <h2> element using querySelector() with the class .header.
2. Change its content to "Welcome to FiTech!".
3. Print the selected element using console.log( )
  answer*/

const play = document.querySelector('.header');
console.log(play);

play.textContent = "Welcome to Fitech!"
console.log(play);

/* task 4
1. Use querySelector() to select the input field with the class user-input.
2. Add a keydown event listener that prints "Key pressed" whenever a key is pressed.
3. Also print the current value of the input field using console.log() inside the event handler
 answer*/
const elem3 = document.querySelector('.user-input');
console.log(elem3)

elem3.addEventListener('keydown', function(){
    console.log("key pressed");

    console.log(elem3.value);
})


/* task 5
1. Use JavaScript to select the <a> element using getElementById( ).
2. Retrieve the value of the href attribute using getAttribute( ).
3. Print the value of the href attribute using console.log( )
 answer*/

const elem2 = document.getElementById('come');
console.log(elem2);

const hrefValue = elem2.getAttribute('href');
console.log(hrefValue);


/* task 6
1. Use JavaScript to select all <p> elements using getElementsByTagName( ).
2.Change the content of the first paragraph to "This is the updated paragraph 1".
3. Print the <p> elements collection using console.log( )
 answer*/

const buy = document.getElementsByTagName('p');
console.log(buy);

buy[0].textContent = "This is the updated paragraph 1"
console.log(buy[0]);

/* task 7
1. Use JavaScript to select all elements with the class box using getElementsByClassName().
2. Change the background color of the second box to "yellow".
3. Print the collection of elements using console.log( )
 answer*/

const pay = document.getElementsByClassName('box');
console.log(pay);

pay[1].style.backgroundColor = "yellow"
console.log(pay[1]);

/* task 8
1. Use JavaScript to select the button using getElementById( ).
2. Add a click event listener that changes the button text to "Button Clicked!" when clicked.
3. Print "Button was clicked" inside the event handler using console.log( )
 answer*/

const sell = document.getElementById('get');
console.log(sell);

sell.addEventListener('click', function(){
sell.textContent = "button was clicked!"
})

/* task 9
1. Select the <div> element using getElementById().
2. Change its width to 200px and background color to "green".
3. Print the modified element using console.log( )
 answer*/

const elem1 = document.getElementById('come');
console.log(elem1);

elem1.style.backgroundColor = "green";
elem1.style.width = "200px";
console.log(elem1);


/* 
1. Use JavaScript to select the <img> element using getElementById( ).
2. Add a title attribute with the value "Bootcamp Image".
3. Print the <img> element using console.log( ).
*/

