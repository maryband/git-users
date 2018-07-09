document.querySelector('button').addEventListener('click', loadUsers);

    function loadUsers(){
      const xhr = new XMLHttpRequest();
      xhr.open('GET', 'https://api.github.com/users', true);

      xhr.onreadystatechange = function(){
        if(xhr.status == 200){
          const users = JSON.parse(xhr.responseText);

          let output = '';
          for(let i in users){
            output +=
              '<div class="user">' +
              '<img src="'+users[i].avatar_url+'" width="100" height="100">' +
              '<ul>' +
              '<li>ID: '+users[i].id+'</li>' +
              '<li>Login: '+users[i].login+'</li>' +
              '<li>URL: '+users[i].url+'</li>' +
              '<li>Type: '+users[i].type+'</li>' +
              '<li>Site admin: '+users[i].site_admin+'</li>' +
              '</ul>' +
              '</div>';
          }
          document.querySelector('#users').innerHTML = output;
        }
      }
      
      xhr.send();
    }