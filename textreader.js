<<<<<<< HEAD
/**
 * Reading textfile of music events.
 * 
 * 
 */

class EventReader 
{
    constructor(note, starttime, stoptime) 
    {
        this.note = note;
        this.starttime = starttime;
        this.stoptime = stoptime;
    }

        toString () {
        return `${this.note} | ${this.starttime}g P :: ${this.stoptime}g C`
    }
}

=======
>>>>>>> f766b21217a1481ee73b9442a1a59bc12dce4fb4

$.get('text.txt', function(data) {

   //var res = data.split("/", 3);
var res = data.split("/");

    console.log(res);

    let eventSize = (res.length)/3;
 //   console.log(eventSize);

    let j = 0;

    var ar = new Array(eventSize);
    
        for(let i = 0; i < ar.length; i += 1)
        { 

            ar[i] = new EventReader(res[j], res[j+1], res[j+2]);

            j = j + 3;

           console.log(ar[i].note + ' ' + ar[i].starttime + ' ' + ar[i].stoptime);
        }
}, 'text');

/*
function save_content_to_file(content, filename){

    var dlg = false;
    with(document){
     ir=createElement('iframe');
     ir.id='ifr';
     ir.location='about.blank';
     ir.style.display='none';
     body.appendChild(ir);
      with(getElementById('ifr').contentWindow.document){
           open("text/plain", "replace");
           charset = "utf-8";
           write(content);
           close();
           document.charset = "utf-8";
           dlg = execCommand('SaveAs', false, filename);
       }
       body.removeChild(ir);
     }
    return dlg;
}
*/