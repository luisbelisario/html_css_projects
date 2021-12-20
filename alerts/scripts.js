document.getElementById('msg').style.display = 'none';

function closeAlert(event) {
    event.currentTarget.parentElement.style.display = "none";
}

function openAlert(classeMsg, textoMsg) {
    let divMsg = document.getElementById('msg')
    divMsg.innerHTML = textoMsg + '<span class="btn-close" onClick="closeAlert(event)">&times;</span>';
    divMsg.className = 'msg ' + classeMsg;
    divMsg.style.display = 'block';
}
