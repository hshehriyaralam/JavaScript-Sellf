//  Color Genertae 
const randomColor = () => {
    let Hex = "0123456789abcdef"
    let color = '#'
for (let i = 0; i<6; i++) {
    color += Hex[Math.floor(Math.random() * 16)]
    }
    return color
}
let backgroundColor1 = '#212121'
document.body.style.backgroundColor = backgroundColor1

// Start Changing
let setCahngeInterval;
const startChanging = function ()  {
    if(!setCahngeInterval){
    setCahngeInterval = setInterval(BgChange, 1000)
    };
    function BgChange(){
        document.body.style.backgroundColor =  randomColor();
    }
    console.log("start");
    
};

// Stop Changing
const stopChanging = function() {
    console.log("stop");
    clearInterval(setCahngeInterval)
    setCahngeInterval = null
    document.body.style.backgroundColor = backgroundColor1
}




document.querySelector('#start').addEventListener('click', startChanging)
document.querySelector('#stop').addEventListener('click', stopChanging)
