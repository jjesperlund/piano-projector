/**
 * Class: Noteblocks (visualization)
 */

class NoteBlock{

    constructor(note, width, startTime, stopTime, kColor){

        this.active = new Boolean(false);
        this.note = note;
        this.blockWidth = width;
        this.startTime = startTime;
        this.stopTime = stopTime;
        this.noteLength = (stopTime - startTime)*tempo;

        this.mesh = new THREE.Mesh(new THREE.BoxGeometry(this.blockWidth,this.noteLength,0.001),       
        new THREE.MeshPhongMaterial({color: kColor}));

    }

    toString () {
        return "Note: " + this.note + '  StartTime: ' + this.startTime + ' NoteLength: ' + this.noteLength;
    }

}

function loadNoteBlocks(){

    var songArray = [];
    songArray = parseSongData(song.getSongName());
    let size = songArray.length;
    var noteBlockArray = new Array(size);
    let keyColor;

           let noWhiteKeys = getSetupInfo()[0],
               noBlackKeys = getSetupInfo()[1],
               noKeys = noWhiteKeys + noBlackKeys,
               right = getSetupInfo()[2],
               left = getSetupInfo()[3];

           let pianoLength = right-left,
               whiteNoteWidth = pianoLength/noWhiteKeys - 0.01,
               blackNoteWidth = 0.68181818 * whiteNoteWidth,
               noteCenter = noteWidth/2;
    
    for(let i = 0; i < size; ++i){
         
        let note = songArray[i].note;

        if(note.includes("b"))
        {
            noteWidth = blackNoteWidth;
            keyColor = 0x000d33;    
        }

        else
        {
            noteWidth =  whiteNoteWidth;
            keyColor = 0x002db3;
        }
            
        noteBlockArray[i] = new NoteBlock(songArray[i].note, noteWidth, songArray[i].starttime, songArray[i].stoptime, keyColor);
    }

    return noteBlockArray;
    
}