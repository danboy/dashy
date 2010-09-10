function Person(twitterName) {  
  var personElement = $(document.createElement('li')),
      imageElement = $(document.createElement('img')),
      nameElement = $(document.createElement('h3')),
      messageElement = $(document.createElement('p'));
      
  $(personElement).addClass('person');
  
  $(imageElement).addClass('image').attr('src','images/smileys/default.png');
  $(personElement).append(imageElement);
  
  $(nameElement).addClass('name').text(twitterName);
  $(personElement).append(nameElement);
  
  $(messageElement).addClass('message');
  $(personElement).append(messageElement);
  
  $('#people').append(personElement);

  function hasMood(mood, tags) {
    return ($.inArray(mood, tags) != -1);
  }

  return {
    setMessage: function(status) {
      $(messageElement).text(status);
    },
    
    setMood: function(tags) {
      if(hasMood('#happy', tags)) {
        $(imageElement).attr('src', 'images/smileys/happy.png');
      } else if(hasMood('#angry', tags)) {
        $(imageElement).attr('src', 'images/smileys/angry.png');
      }
    }
  };
}