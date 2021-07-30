let rang1= ["01", "02", "05", "06", "09", "10", "13", "14", "17", "18", "21", "22", "25", "26", "29", "30", "33", "34", "37", "38", "41", "42", "45", "46"]

let rang2= ["04", "03", "08", "07", "12", "11", "16", "15", "20", "19", "24", "23", "28", "27", "32", "31", "36", "35", "40", "39", "44", "43", "48", "47"]

let colors= ["#3d8069", "#9e3809", "#e0d423", "#9e0909", "#240f72"]


for (let index = rang1.length; index > 0; index--) {
    let place= document.createElement('div')
    place.classList.add('place')
    place.innerHTML= rang1[index - 1]
    place.style.backgroundColor= colors[Math.floor(Math.random(0) * colors.length)]

    document.getElementById('top').appendChild(place)
}
for (let index = rang2.length; index > 0; index--) {
    let rang= document.createElement('div')
    rang.classList.add('place')
    rang.innerHTML= rang2[index - 1]
    rang.style.backgroundColor= colors[Math.floor(Math.random(0) * colors.length)]
        
    document.getElementById('bottom').appendChild(rang) 
    
}