


//BUTTON TO USERPHOTO(NOT NECESARY)
document.getElementById('user').style.backgroundImage = user.photoURL || "hgyr";



//BUTTONS TO SEQUENCES

document.getElementById('sequence').addEventListener('click', (event) => {

  event.target
      console.log('go to sequence!')

      location.href = './sequence1.html'
});