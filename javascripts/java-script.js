document.addEventListener("DOMContentLoaded", function() {

    let flagg = false;


    document.querySelector(".secondScreen").addEventListener("mouseover", (e) => {
            flagg = true;
    })

    
    document.querySelector(".secondScreen").addEventListener("mouseleave", (e) => {
        flagg = false;
})




    const cursorDot = document.getElementById("cursorDot")
        document.addEventListener("mousemove", (e) => {
            if (!flagg) {
                let posX = e.clientX;
                let posY = e.clientY;
                let scrollPos = scrollY;
                cursorDot.style.left = `${posX}px`;
                cursorDot.style.top = `${posY}px`;
            
                cursorDot.style.width = "3vw";
                cursorDot.style.height = "3vw";
                cursorDot.style.animation="none";
                cursorDot.animate({
                    left: `${posX}px`,
                    top: `${posY}px`,
                    width: "3vw",
                    height: "3vw",
                    borderRadius: "100%",
                    
                }, {
                    duration:500,
                    fill: "forwards"
                })

            }  else {
                let posX = e.clientX;
                let posY = e.clientY;
                let scrollPos = scrollY;
                cursorDot.style.left = `${posX}px`;
                cursorDot.style.top = `${posY}px`;
            

                console.log(flag)
                cursorDot.style.width = "1vw";
                cursorDot.style.height = "1vw";
                cursorDot.style.animation="aa 1s infinite cubic-bezier(0.075, 1, 0.095, 2)";
                cursorDot.animate({
                    left: `${posX}px`,
                    top: `${posY}px`,
                    width: "25vw",
                    height: "25vw",
                    borderRadius: "0%",
                }, {
                    duration:500,
                    fill: "forwards"
                })
            }

            
        })
            
        
flag = false;
    const btns = document.querySelectorAll(".navBtn");
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener('mouseenter', (e) => {
           // document.getElementById("fixedMenu").style.backdropFilter="blur(10px)"
             document.getElementById("back").style.opacity="0.6"
            e.target.classList.add('hovered')
            //animText(cheakerText(e.target.id))
            var typed = new Typed('.fixedText', {
                strings: [`${cheakerText(e.target.id)}`],
                typeSpeed: 10
              });
              
            flag = true;
        }, false);
    }

    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener('mouseleave', (e) =>{
         //   document.getElementById("fixedMenu").style.backdropFilter="none"
            document.getElementById("back").style.opacity="0"
            document.getElementById("fixedText").textContent = "";
            e.target.classList.remove('hovered')
            flag = false;
        }, false);
    }


    function cheakerText(elem) {
        if (elem == "main") {
            return "главное меню"
        }  else if (elem == "place") {
            console.log("place")
            return "пространство"
        } else if (elem == "book") {
            console.log("book")
            return "книга"
        } else if (elem == "posters") {
            console.log("posters")
            return "постеры"
        }
    }

    document.querySelector("footer").addEventListener("mouseover", (e) => {
        document.querySelector(".cursorDot").style.backgroundColor="white"
        document.querySelector(".cursorDot").style.backdropFilter="none";
        document.querySelector(".footerText").style.opacity="1";

            document.querySelector("footer").addEventListener("mouseleave", (e) => {
                document.querySelector(".cursorDot").style.backgroundColor="black";
                document.querySelector(".footerText").style.opacity="0";
                document.querySelector(".cursorDot").style.backdropFilter="invert(70%)"
                document.querySelector("footer").removeEventListener("mouseleave", (e) => {})
            })
    })


})

