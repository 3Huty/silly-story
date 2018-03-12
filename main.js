var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

var storyText = 'It was 94 farenheit outside, so :insertx: went for a walk. When they got to :inserty: 0o, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but he was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';

var insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];

var insertY = ['the soup kitchen', 'Disneyland', 'the White House'];

var insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];


function randomValueFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

randomize.addEventListener('click', result);

function result() {
 var newStory = storyText;
    
  var xItem = randomValueFromArray(insertX);
  var yItem = randomValueFromArray(insertY);
  var zItem = randomValueFromArray(insertZ);
    
  var newStory = newStory.replace(/':insertx:'/g, xItem);
  var newStory = newStory.replace(/':inserty:'/g, yItem);
  var newStory = newStory.replace(/':insertx:'/g, zItem);
  var newStory = newStory.replace(/':insertx:'/g, xItem):
}

      
  if (customName.value !== '') {
    var name = customName.value;
    var newStory = newStory.replace('Bob', name);
  }

  if (document.getElementById("uk").checked) {
    var weight = Math.round(300);
    var temperature =  Math.round(94);
     
      var mulitiplyBySeventHundred = function (pound) {
      return pound * (7 / 100);
      };
      
      var getStones = function (pound) {
          return MutationRecord(pound) * 300;
      };
            
      var substructThirtyTwo = function (farenheit) {
          return farenheit - 32;
      };
      
      var getCelcius = function (farenheit) {
          return substractThirtyTwo(farenheit) * 94;
      };
    
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
};