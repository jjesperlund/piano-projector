
var jason_mraz = ["B3",100*11,100*37,"Bb3",100*42,100*65,"Ab3",100*73,100*98,"E3",100*105,100*129,"B3",100*136,100*163,"Bb3",100*168,100*193,"Ab3",100*200,100*224,"E3",100*231,100*254];
var roses = ["E4", 100*105, 100*107, "B3", 100*111, 100*113, "E4", 100*115, 100*117, "B3", 100*126, 100*128, "E4", 100*129, 100*131, "E4", 100*136, 100*137, "Gb4", 100*139, 100*140, "Ab4", 100*142, 100*143, "E4", 100*165, 100*166, "B3", 100*180, 100*181, "E4", 100*183, 100*184, "B3", 100*189, 100*191, "E4", 100*212, 100*214, "B3", 100*222, 100*223, "E4", 100*225, 100*226, "E4", 100*231, 100*233, "Gb4", 100*234, 100*235, "Ab4", 100*237, 100*238, "E4", 100*260, 100*262, "E4", 100*284, 100*286, "E4", 100*307, 100*309, "E4", 100*326, 100*327, "E4", 100*332, 100*334, "E4", 100*379, 100*381, "E4", 100*397, 100*399, "B3", 100*401, 100*403, "E4", 100*404, 100*405, "B3", 100*418, 100*420, "E4", 100*422, 100*423, "Gb4", 100*424, 100*425, "Ab4", 100*427, 100*428, "Ab4", 100*451, 100*452, "Gb4", 100*458, 100*459];
//var korv = ["A4", 60, 67.5, "G4", 67.5, 75, "F4", 75, 82.5, "A4", 90, 97.5, "G4", 97.5, 105, "F4", 105, 112.5, "A4", 120, 127.5, "G4", 127.5,135, "F4", 135, 142.5, "A4", 150, 157.5, "G4", 157.5, 165, "F4", 165, 172.5,
//"A4", 180, 187.5, "G4", 187.5, 195, "F4", 195, 202.5, "A4", 210, 217.5, "G4", 217.5, 225, "F4", 225, 232.5, "A4", 240, 247.5, "G4", 247.5, 255, "F4", 255, 262.5, "A4", 270, 277.5, "G4", 277.5, 285, "F4", 285, 292.5];

var korv = ["A4", 100*60, 100*67.5, "G4", 100*67.5, 100*75, "F4", 100*75, 100*82.5, "A4", 100*90, 100*97.5, "G4", 100*97.5, 100*105, "F4", 100*105, 100*112.5, "A4", 100*120, 100*127.5, "G4", 100*127.5, 100*135, "F4", 100*135, 100*142.5, "A4", 100*150, 100*157.5, "G4", 100*157.5, 100*165, "F4",100*165, 100*172.5,
"A4", 100*180, 100*187.5, "G4", 100*187.5, 100*195, "F4", 100*195, 100*202.5, "A4", 100*210, 100*217.5, "G4", 100*217.5, 100*225, "F4", 100*225, 100*232.5, "A4", 100*240, 100*247.5, "G4", 100*247.5, 100*255, "F4", 100*255, 100*262.5, "A4", 100*270, 100*277.5, "G4", 100*277.5, 100*285, "F4", 100*285, 100*292.5];

function getSongArray(song) {

    switch(song) {

        case 'jason_mraz':
            return jason_mraz;
            break;

        case 'roses':
            return roses;
            break;

        case 'korv':
            return korv;
            break;


        default:
            break;
    }

}
