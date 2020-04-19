var C = 261.6;
var C_S = 277.2;
var D = 293.7;
var D_S = 311.1;
var E = 329.6;
var F = 349.2;
var F_S = 370.0;
var G = 392.0;
var G_S = 415.3;
var A = 440.0;
var A_S = 466.2;
var B = 493.9;

var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
//Keyboard mode. Will have UI setting in the future.
var  m = "sine";

function playNote(note, sel) {
    var oscillator = audioCtx.createOscillator();
    oscillator.type = m;
    oscillator.frequency.setValueAtTime(note, audioCtx.currentTime); // value in hertz
    oscillator.connect(audioCtx.destination);
    oscillator.start(audioCtx.currentTime);
    $(sel).bind("mouseleave mouseup", function() {
        oscillator.stop(audioCtx.currentTime);
    });
}

$(document).ready(function(){
    $(".key").mousedown(function() {
        var note;
        switch($(this).attr("id")) {
            case "C": 
                playNote(C, "#C");
                break;
            case "C_S": 
                playNote(C_S, "#C_S");
                break;
            case "D": 
                playNote(D, "#D");
                break;
            case "D_S": 
                playNote(D_S, "#D_S");
                break;
            case "E":
                playNote(E, "#E");
                break;
            case "F":
                playNote(F, "#F");
                break;
            case "F_S":
                playNote(F_S, "#F_S");
                break;
            case "G":
                playNote(G, "#G");
                break;
            case "G_S":
                playNote(G_S, "#G_S");
                break;
            case "A":
                playNote(A, "#A");
                break;
            case "A_S":
                playNote(A_S, "#A_S");
                break;
            case "B":
                playNote(B, "#B");

        }
    });
});