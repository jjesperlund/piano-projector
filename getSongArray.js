
var jason_mraz = ["B3",11,37,"Bb3",42,65,"Ab3",73,98,"E3",105,129,"B3",136,163,"Bb3",168,193,"Ab3",200,224,"E3",231,254];
var roses = ["E4", 107, 109, "E4", 110, 111, "B3", 113, 114, "E4", 116, 118, "E4", 121, 124, "B3", 125, 126, "B3", 128, 129, "E4", 130, 133, "E4", 137, 139, "Gb4", 139, 141, "Ab4", 142, 149, "B4", 154, 157, "Ab4", 157, 158, "Ab4", 160, 161, "Ab4", 163, 166, "Gb4", 169, 169, "Gb4", 172, 174, "E4", 175, 177, "Gb4", 178, 184, "E4", 184, 186, "Db4", 190, 196, "B3", 199, 200, "E4", 202, 204, "B3", 204, 206, "B3", 208, 209, "E4", 210, 212, "E4", 216, 218, "B3", 219, 220, "B3", 222, 225, "E4", 225, 228, "E4", 232, 233, "Gb4", 234, 236, "Ab4", 237, 243];

function getSongArray(song) {

    switch(song) {

        case 'jason_mraz':
            return jason_mraz;
            break;

        case 'roses':
            return roses;
            break;

        default:
            break;
    }

}