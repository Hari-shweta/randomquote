const quotes = document.getElementById("quote")
const author = document.getElementById("auth")  
let real = ""
let quotesdata = ""
let t = ""
const newQ = document.getElementById("button1")
const newH = document.getElementById("button2")
const hobbies=[
    "Did you make origami? Try it you will love it!",
    "Clean gallery, mails and stuff",
    "what is it like to sing your heart out?",
    "Playing games is lot of fun",
    "Do a bit of home organization",
    "Open your to do list, may be you will find some there",
    "Find a receipe that you always wanted your mom to make and cook it",
    "How long it's been since you talked open to your to your mother?",
    "Read a book",
    "Do you enjoy watching movies, try watching different language movies",
    "Learn a language at least a word",
    "Time for your personal care both body and soul",
    "May be there's a poet inside you, it's time for poetry!!",
    "Do you what it feels like to look at beautiful pictures, oh! try capturing one",
    "Sort your clothes",
    "Make memorable videos, yay, video editing",
    "History is past but understanding is present, learn",
    "Draw, let your hand dance the vibes of your heart",
    "solve puzzles, it's interesting",
    "There's someone's birthday coming, oh! edit their picture"
]

const getHobby = () => {
    let r = Math.floor(Math.random()*hobbies.length)
    let h = hobbies[r]
    quotes.innerHTML = h
    author.innerHTML = ""
}

const getNewQuotes = () => {
    let rnum = Math.floor(Math.random()*100)
    quotesdata = real[rnum]
    quotes.innerText = `${quotesdata.text}`
    if(quotesdata.author==null){
        (author.innerText = " unknown")
    }
    else{
        t = quotesdata.author 
        let a = t.split(" ")
        author.innerText = "-  " + a[0]
    }
}

const getQuotes = async () => {
    const api = "https://type.fit/api/quotes"
    try{
        let data = await fetch(api)
        real = await data.json()
        getNewQuotes()
    }catch(error){
    }
    
}
newQ.addEventListener("click",getNewQuotes)
newH.addEventListener("click",getHobby)
getQuotes()