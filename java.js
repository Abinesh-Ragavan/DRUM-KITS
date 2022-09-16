const kits=["crash","kick","snare","tom"]

const containerEL =document .querySelector(".container")

kits.forEach((kit)=>{
    const btnEl =document.createElement("button");
    btnEl.style.backgroundImage ="url(images/"+kit +".png )"
    btnEl.classList.add("btn")
    btnEl.innerText=kit 
    containerEL.appendChild(btnEl);
    const audioEL =document.createElement("audio");
    audioEL.src="sound/" +kit + ".mp3"
    containerEL.appendChild(audioEL);
    btnEl.addEventListener("click",()=>{
        audioEL.play()
    })
    window.addEventListener("keydown",(event)=>{
        if(event.key==kit.slice(0,1)){
            audioEL.play();
            btnEl.style.transform="scale(0.9)";
            setTimeout(()=>{
                btnEl.style.transform ="scale(1)";
            })
        }


    })
})


