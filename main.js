function run() {
    console.log("Hello!");
}

f = 0;
function yesno(){
    if(f==0){
        f=1;
        console.log('yes');
        document.getElementById('test').value='yes';
        document.getElementById('test').style.backgroundColor='#FFFFFF'
    }
    else{
        f=0;
        console.log('no');
        document.getElementById('test').value='no';
        document.getElementById('test').style.backgroundColor='#000000';
    }
}