function Build(config) {
  var buildElement = $(document.createElement('li')),
      nameElement = $(document.createElement('h3')),
      timeElement = $(document.createElement('p')),
      clearingElement = $(document.createElement('div'));

  $(buildElement).addClass('build');
  $(nameElement).addClass('name').text(config.name);
  $(timeElement).addClass('time');
  $(clearingElement).addClass('clear');
  $(buildElement).append(nameElement).append(timeElement).append(clearingElement);
  $('#builds').append(buildElement);
   
  return {
    name: config.name,
    setStatus: function(status) {
      $(buildElement).removeClass('failure building success');
      
      if(status == 'success') {
        $(buildElement).addClass('success');
      } else if(status == 'building') {
        $(buildElement).addClass('building');
      } else if(status == 'failure') {
        $(buildElement).addClass('failure');
      }
    }
  };
}