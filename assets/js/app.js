let cl = console.log;

const email = document.getElementById('email');
const colDiv = document.getElementById('colDiv')

const onFocus = (eve) => {
    
    eve.target.style.border = '2px solid orange';
}

const onBlur = (eve) => {
    let targetEve = eve.target;

    targetEve.style.border = '1px solid grey';
    cl(targetEve.value);
    let str = targetEve.value

    var indexAt = str.indexOf('@');
    var indexDot = str.indexOf('.');

    if(str.length === 0){
        //cl(targetEve.nextElementSibling);
        targetEve.nextElementSibling.classList.remove('d-none');
    }else{
        targetEve.nextElementSibling.classList.add('d-none');

        if(str.includes('@') === true && str.includes('.') === true && str.slice(indexAt+1,indexDot).length >2 && str.slice(indexDot+1).length > 1){
            colDiv.lastElementChild.classList.add('d-none'); 
        }else{
            colDiv.lastElementChild.classList.remove('d-none'); 
        }
        
    //     cl(indexAt)
    //     cl(indexDot)
    //     cl(str.slice(indexAt+1,indexDot).length)
    //     cl(str.slice(indexDot+1).length)
    }
}
email.addEventListener('focus', onFocus);
email.addEventListener('blur', onBlur);