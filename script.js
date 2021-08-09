const keys = document.querySelectorAll(".key")

function playNote(event) {
    let audioKeyCode = getKeyCode(event);
    const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`)

    if (!key) {
        return;
    }
    if (event.shiftKey) {

    }
    addPlayingClass(key) //adiciona clase css
    playAudio(audioKeyCode) //Acionar Audio
    visorNotas(key) //Adicionar notas no visor
}

function getKeyCode(event) {
    let keyCode;
    const isKeyboard = event.type === "keydown"

    if (isKeyboard) {
        keyCode = event.keyCode
    } else {
        keyCode = event.target.dataset.key
    }
    return keyCode
}

function playAudio(audioKeyCode) {
    const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`)
    audio.currentTime = 0;
    audio.play()
}

function addPlayingClass(key) {
    key.classList.add('playing')
}

function removePlayingClass(event) {
    event.target.classList.remove("playing")
}

const zeroFill = n => {
    return ('0' + n).slice(-2);
}
const interval = setInterval(() => {
    const now = new Date();
    const dataHora = zeroFill(now.getUTCDate()) + '/' + zeroFill((now.getMonth() + 1)) + '/' + now.getFullYear() + ' ' + zeroFill(now.getHours()) + ':' + zeroFill(now.getMinutes()) + ':' + zeroFill(now.getSeconds());
    document.getElementById('date').innerHTML = dataHora;
}, 1000);

function visorNotas(key) {

    var notaMusical = document.getElementById('NotaMusic');
    //const notas = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']

    switch (key.id) {
        case "C":
            notaMusical.innerHTML = 'C'
            console.log('C')
            break;
        case "CS":
            notaMusical.innerHTML = 'C#'
            console.log('C#')
            break;
        case "D":
            notaMusical.innerHTML = 'D'
            console.log('D')
            break;
        case "DS":
            notaMusical.innerHTML = 'D#'
            console.log('D#')
            break;
        case "E":
            notaMusical.innerHTML = 'E'
            console.log('E')
            break;
        case "F":
            notaMusical.innerHTML = 'F'
            console.log('F')
            break;
        case "FS":
            notaMusical.innerHTML = 'F#'
            console.log('F#')
            break;
        case "G":
            notaMusical.innerHTML = 'G'
            console.log('G')
            break;
        case "GS":
            notaMusical.innerHTML = 'G#'
            console.log('G#')
            break;
        case "A":
            notaMusical.innerHTML = 'A'
            console.log('A')
            break;
        case "AS":
            notaMusical.innerHTML = 'A#'
            console.log('A#')
            break;
        case "B":
            notaMusical.innerHTML = 'B'
            console.log('B')
            break;
        default:
            notaMusical.innerHTML = '?'
            console.log('?')
    }
}

function registerEvents() {
    keys.forEach(function(key) {
        key.addEventListener("click", playNote)
        key.addEventListener("transitionend", removePlayingClass)
    })
    window.addEventListener("keydown", playNote)
}
window.addEventListener("load", registerEvents)