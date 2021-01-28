//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector('button').addEventListener('click', spacePhoto)

function spacePhoto(){
    const userDate = document.querySelector('input').value
    const api = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=" + userDate

    fetch(api)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            let spaceName = data.title
            let spaceImg = data.hdurl
            let spaceDescript = data.explanation

            document.querySelector('h2').innerText = spaceName
            document.querySelector('img').src = spaceImg
            document.querySelector('h3').innerText = spaceDescript
        })
        .catch(err => {
            console.log(`error ${err}`)
            document.querySelector('h2').innerText = data.msg
        })

    // if (userDate > 1995/16/06){
    //     alert("Date must be between June 16, 1995 and January 26, 2021")
    // }
}


//Name (h2)
//Img (img...src="")
//Descript (h3)
