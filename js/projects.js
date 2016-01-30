(function () {

  function bindPersonalProjectList() {
    var xhr = new XMLHttpRequest();

    xhr.onload = function () {
      if (this.status == 200) {
        var projectsCnt = document.querySelector('#projects-container');
        var response = JSON.parse(this.responseText);

        for (var i = 0; i < response.length; i++) {
          var div = getGithubBoxDiv(response[i]);

          projectsCnt.appendChild(div);
        }
      }
    };

    xhr.open('GET', 'https://api.github.com/users/mapaiva/repos', true);
    xhr.send();
  }

  function bindOrganizationProjectList() {
    var xhr = new XMLHttpRequest();

    xhr.onload = function () {
      if (this.status == 200) {
        var projectsCnt = document.querySelector('#projects-container');
        var response = JSON.parse(this.responseText);

        for (var i = 0; i < response.length; i++) {
          var div = getGithubBoxDiv(response[i]);

          projectsCnt.appendChild(div);
        }
      }
    };

    xhr.open('GET', 'https://api.github.com/users/gitpie/repos', true);
    xhr.send();
  }

  function getGithubBoxDiv(repo) {
    var div = document.createElement('div');

    div.className = 'github-box';
    div.innerHTML = [
      '<div class="github-box-header">',
        '<h3><a href="', repo.html_url,'" title="', repo.name,'" target="_blank">', repo.name,'</a></h3>',
        '<div class="github-stats">',
          '<a class="repo-watchers" href="', repo.html_url.concat('/watchers'),'" target="_blank"><i class="fa fa-eye"></i>', repo.watchers,'</a>',
          '<a class="repo-stargazers" href="', repo.html_url.concat('/stargazers'),'" target="_blank"><i class="fa fa-star"></i>', repo.stargazers_count,'</a>',
          '<a class="repo-forks" href="', repo.html_url.concat('/network'),'" target="_blank"><i class="fa fa-code-fork"></i>', repo.forks,'</a>',
        '</div>',
      '</div>',
      '<div class="github-box-content">',
        repo.description,
        ' - <a href="', repo.html_url.concat('#readme'),'" target="_blank">Read More</a>',
      '</div>',
      '<div class="github-box-update">',
        'Latest commit to <strong>', repo.default_branch,'</strong> on ', (new Date(repo.updated_at).toLocaleString()),
      '</div>'
    ].join('');

    return div;
  }

  window.onload = function () {
    bindOrganizationProjectList();
    bindPersonalProjectList()
  };

})();
