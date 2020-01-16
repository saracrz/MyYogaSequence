

document.getElementById('close').addEventListener('click', e => {
  const removeAsana = {
    name: document.getElementById('asana.name').value,
  }
  api.updateSequence(removeAsana)
    .findByIdAndUpdate()
    .then(response => {
      console.log(response);
    })
})


// document.getElementById("").style.display = 'none';



// const urlParams = new URLSearchParams(window.location.search);
// const sequenceId = urlParams.get('id');

// api.getSeq(sequenceId).then(asanas => {
//   asanas.forEach(asana => {
//     var asanaElem = document.createElement("div");
//     asanaElem.className += "col-lg-3 col-md-4 col-6"
//     asanaElem.id = asana._id
//     asanaElem.innerHTML = `
//       <div class="thumbnail">
//         <a class="close" href="#">×</a>
//       </div>
//       <a href="#" class="d-block mb-4 h-100">
//         <img class="img-fluid img-thumbnail" src="${asana.photoURL}" alt="">
//         </a>
//       </div>`

//     document.getElementById('asanas').appendChild(asanaElem)
//   })
// });
