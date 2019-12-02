const urlParams = new URLSearchParams(window.location.search)
const sequenceId = urlParams.get('id')

api.getSeq(sequenceId)
  .then(sequence => {
    document.getElementById('name').innerText = sequence.name
    document.getElementById('comments').innerText = sequence.comments

    sequence.asanas.forEach(asana => {
      var asanaElem = document.createElement('div')
      asanaElem.className += 'col-lg-3 col-md-4 col-6'
      asanaElem.id = asana._id
      asanaElem.innerHTML = `
      <div class="thumbnail">
        <a onclick="remove('${asana._id}')" class="close icono-remove" href="#">×</a>
      </div>
      <a href="#" class="d-block mb-4 h-100">
        <img class="img-fluid img-thumbnail" src="${asana.photoURL}" alt="">
        </a>
      </div>`

      document.getElementById('asanas').appendChild(asanaElem)
    })
  })

document.getElementById('button-volver') &&
  document.getElementById('button-volver').addEventListener('click', (event) => {
    location.href = './index.html'
  })
  
function remove(asanaID) {
  api.removeAsanaInSequence(asanaID, sequenceId)
    .then( removed => {
      document.getElementById(asanaID).remove();
      // document.getElementById(asanaElem.innerHTML) = " ";
    })   
}
  

