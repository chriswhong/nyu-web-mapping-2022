// consolidate the above 3 listeners into one listener
$('.artist-container').on('click', function() {
  // pull out the data-album-art attribute from the clicked element
  var albumArt = $(this).data('album-art')
  // overwrite the html in the right-half div with an image of the album art
  $(".right-half").html(`<img src='${albumArt}' />`)
})

// the following code will tinker with data types in javascript

// boolean
var myBoolean = true



// string

var firstName = 'Chris'
var lastName = 'Whong'

var fullName = firstName + ' ' + lastName
var fullNameAsTemplateLiteral = `${firstName} ${lastName}, esq.`

console.log(fullName)
console.log(fullNameAsTemplateLiteral)

// numbers

var age = 41
var kidAge = 6
var counter = 0

var combinedAge = age + kidAge
$('.toggle').on('click', function () {
  myBoolean = !myBoolean
  console.log(myBoolean)
  counter = counter + 1
  $('html').append(`<p>The combined age is ${combinedAge}, the counter has been clicked ${counter} times.</p>`)
})

console.log('the combined age is', combinedAge)

// arrays
var nameArray = ['Chris', 'Charley', 'Ben', 'Nathan', 'Renata']
console.log('The person at position 4 in the array is', nameArray[4])
nameArray.forEach(function (name, index) {
  $('html').append(`<p>${name} is stored in postion ${index}</p>`)
})

// objects

var chrisObject = {
  age: 41,
  almaMater: 'NYU',
  borough: 'Brooklyn',
  dog: 'Tubu',
  tired: true,
  statesLivedIn: [
    'MD',
    'NY'
  ]
}

console.log(chrisObject.age, chrisObject.almaMater)
$('html').append(`<p>Chris' Alma Mater is ${chrisObject.almaMater}</p>`)
