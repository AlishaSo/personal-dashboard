const body = document.body;
const authorP = document.querySelector('#author');

//access Unsplash API to get a random photo
fetch('https://api.unsplash.com/photos/random?orientation=landscape&query=experimental&client_id=FngrTy9r1X_CbbUaxsie0ll_C4W_xqux07X6JxzHLQc&')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        if(!data.errors) {
          body.style.backgroundImage = `url(${data.urls.full})`; //set the background to the image
          authorP.innerHTML = `By: ${data.user.name} on <a class='unsplash-attribution' href='https://unsplash.com/?utm_source=your_app_name&utm_medium=referral'>Unsplash</a>`;
        }
        else {
          throw Error('There\'s been an error with the fetch request to the Unsplash API');
        }
    })
    .catch(error => {
      alert('A new image could not be retrieved at this time');
      body.style.backgroundImage = `url(https://images.unsplash.com/photo-1581488066648-56a585ab6767?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDI0NzB8MHwxfGFsbHx8fHx8fHx8fDE2NDE2NzUzMzU&ixlib=rb-1.2.1&q=85)`;
    });