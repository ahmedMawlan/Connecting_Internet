let title = document.querySelector('.title')
let list = document.querySelector('ul')
let Reload = document.querySelector('button')

window.onload = function(){
    if(window.navigator.onLine){
        online()
    }else{
        offline()
    }
}

// window.addEventListener('online', function(){
//     online()
// })

// window.addEventListener('offline', function(){
//     offline()
// })

Reload.onclick = function(){
    window.location.reload()
}


function online(){
    title.innerHTML = 'Online Now'
    title.style.color = 'green'
    list.style.display = 'none'
    Reload.style.display = 'block'
    Reload.style.background = 'green'
}

function offline(){
    title.innerHTML = 'Offline Now'
    title.style.color = 'black'
    list.style.display = 'block'
    Reload.style.display = 'block'
}
