window.onload = function() {
  var request = new XMLHttpRequest();
  request.onload = outputContributors;
  request.open('get', 'https://api.github.com/repos/maban/styleguides/contributors?&per_page=200', true)
  request.send()
  function outputContributors() {
    var contributors = JSON.parse(this.responseText),
        injectContributors = document.getElementById('people'),
        html = '';
    for (i in contributors) {
      var username = contributors[i].login,
          avatar = contributors[i].avatar_url,
          url = contributors[i].html_url,
          contributions = contributors[i].contributions;
      html += '<li class="person"><a class="person__url" href="'+ url +'"><img src="' + avatar + '" alt="" width="50" class="person__avatar" title="' + username + '"/></a></li>';
    }
    injectContributors.innerHTML = html;
  }
}
