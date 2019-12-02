api
  .sequences()
  .then(sequences => {
    sequences.forEach(sequence => {
      var sequenceElem = document.createElement('div');
      sequenceElem.className += "col-lg-4 col-sm-6 mb-4"
      sequenceElem.innerHTML = `
        <div class="card card-sara h-100">
          <a href="sequence.html?id=${sequence._id}"></a>
          <div class="card-body ">
            <h4 class="card-title card-titulo">
              <a class="card-titulo" href="sequence.html?id=${sequence._id}">${ sequence.name}</a>
            </h4>
            <p class="card-text">${sequence.comments}</p>
          </div>
        </div>`

      document.getElementById('sequences').appendChild(sequenceElem)
    })
  });
  

  


