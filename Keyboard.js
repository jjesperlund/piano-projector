/**
 * Fetching MIDI-data from MIDI Input
 * Using MIDI.js for loading soundfont and play sound
 * Using WebMidi for event listeners
 */

var totalpoints = 0;

class Keyboard{

    constructor(){}

    startInputOutput(song){

        //Loading soundfont
        MIDI.loadPlugin({
            soundfontUrl: "./soundfonts/",
            instrument: 'acoustic_grand_piano',
            onfailure: function() {console.log('Failed to load soundfont to MIDI keyboard')},
            onsuccess: function() {


                var point = 0;
                var pArray = [];

                pArray = parseSongData(song.getSongName());

                //Checking if WebMidi can enable
                WebMidi.enable(function(err){ 
                    if(err) 
                        console.log("WebMidi could not be enabled");
                    else
                        console.log("WebMidi is enabled!");

                        //Fetching MIDI input
                        var input = WebMidi.inputs[0];

                        //Checking if MIDI input is connected
                        if(typeof input != 'undefined'){

                            //Listening for a 'note on' message (on all channels) 
                            input.addListener('noteon', "all", function(e){ 

                            const octave = e.note.octave + 2,
                                  note = sharpToFlat(e.note.name),   
                                  key = note + octave;

                            noteon(key, getCurrentTime()-startTime, pArray);

                            //Play pressed note (0 delay)
                            MIDI.noteOn(0, MIDI.keyToNote[key], e.rawVelocity + 15, 0);

                            });

                            //Listening for a 'note off' message (on all channels) 
                            input.addListener('noteoff', 'all', function(e){
                                const octave = e.note.octave + 2,
                                      note = sharpToFlat(e.note.name),
                                      key = note + octave;

                                //Adding points from noteoff to the totalpoints
                                totalpoints += noteoff(key, getCurrentTime()-startTime, pArray, point);
                                pArray = SongResizer(pArray);

                                //Stop playing the note corresponding to the 'noteoff' message
                                //0 delay, add delay for "sustain pedal"-effect
                                MIDI.noteOff(0, MIDI.keyToNote[key], 0);
                            });

                        }
                        else
                            console.log('MIDI input not connected');

                })
            }
        })

        console.log('Keyboard DONE');
    }  
}
   
function sharpToFlat(note){

    switch(note){
        case 'C#': note = 'Db'; break;
        case 'D#': note = 'Eb'; break;
        case 'F#': note = 'Gb'; break;
        case 'G#': note = 'Ab'; break;
        case 'A#': note = 'Bb'; break;
        default: break;
    }
    return note;

}


function getScore(){
    return totalpoints;
}
 
