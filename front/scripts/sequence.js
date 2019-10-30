const urlParams = new URLSearchParams(window.location.search);
const sequenceId = urlParams.get('sequenceId');
const userId = urlParams.get('userId');

api.get('users/:id/sequencesç/:id')