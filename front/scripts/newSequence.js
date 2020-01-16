let asanas = []

document.getElementById('create-new-sequence').addEventListener('click', e => {
  const newSequence = {
    name: document.getElementById('new-sequence-name').value,
    comments: document.getElementById('new-sequence-comments').value,
    asanas: asanas
  }
  api.createNewSequence(newSequence)
    .then(() => {
      window.location.assign('/')
    })
})

document.getElementById('create-new-sequence') &&
  document.getElementById('create-new-sequence').addEventListener('click', (event) => {
    location.href = './index.html'
})

function pulsasteUno(id) {
  if (asanas.some(asana => asana === id)) {
    asanas = asanas.filter(asana => asana !== id)
    document.getElementById(id).style.border = 'none'
  } else {
    asanas.push(id)
  }

  console.log({ asanas })
  asanas.forEach(id => {
    document.getElementById(id).style.border = '3px solid red'
  })
}

api.asanas().then(asanas => {
  asanas.forEach(asana => {
    var asanaElem = document.createElement('div')
    asanaElem.className += 'col-3 asana-card '
    asanaElem.innerHTML = `<div class="">
                            <div id="${asana._id}" class="card tarjetas-asanas " onclick="pulsasteUno('${asana._id}')">
                              <div class="card-body card-home card-asanas">
                                <h5 class="card-title">${asana.name}</h5>
                              </div>
                              <img class="card-img-bottom mb-10 card-imagen" src="${asana.photoURL}" alt="Card image cap">
                            </div>
                          </div>`

    document.getElementById('asanas').appendChild(asanaElem)
  })
})
