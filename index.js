function happyMood() {
     document.getElementById("instruction").style.display = "none";
    document.getElementById("feeling").textContent = "I'm feeling Happy!"
    document.body.style.backgroundImage = "url('Images/HAPPY.jpg')";

    const feeling = 
    document.getElementById("feeling");

    feeling.classList.remove("pop");
    void feeling.offsetWidth;
    feeling.classList.add('pop')

  


}

function coolMood() {
      document.getElementById("instruction").style.display = "none";
    document.getElementById("feeling").textContent = "I'm cooler than ice!"
    document.body.style.backgroundImage = "url('Images/COOL.jpg')";

 const feeling = 
    document.getElementById("feeling");

    feeling.classList.remove("pop");
    void feeling.offsetWidth;
    feeling.classList.add('pop')
}

function sleepMood() {
      document.getElementById("instruction").style.display = "none";
    document.getElementById("feeling").textContent = "I'm feeling sleepy...zzzzzz"
    document.body.style.backgroundImage = "url('Images/SLEEPY.png')";

     const feeling = 
    document.getElementById("feeling");

    feeling.classList.remove("pop");
    void feeling.offsetWidth;
    feeling.classList.add('pop')
}

function angryMood() {
      document.getElementById("instruction").style.display = "none";
    document.getElementById("feeling").textContent = "I'm ANGRY"
    document.body.style.backgroundImage = "url('Images/ANGRY.jpg')";

     const feeling = 
    document.getElementById("feeling");

    feeling.classList.remove("pop");
    void feeling.offsetWidth;
    feeling.classList.add('pop')

}

