var i =0
const Order = ['aboutme','skills','project','test','contact']
function revealContent() {
    if (window.getComputedStyle(document.getElementById('landing-page')).display == "block"){
        document.getElementById('landing-page').style.display = 'none';
        document.getElementById('aboutme').style.display = 'block';
    }
    else{
        if (i <Order.length-1){
        i = i + 1
        document.getElementById(Order[i]).style.display ='block'
        }
    }
  }