function aboutUsFunction(id) {
    var content1 = document.getElementById("desc");
    var content2 = document.getElementById("visi");
    var content3 = document.getElementById("misi");

    var button1 = document.getElementById("AboutButton");
    var button2 = document.getElementById("VisionButton");
    var button3 = document.getElementById("MissionButton");

    switch(id) {
        case 1:
            content1.style.display = "block";
            button1.style.backgroundColor = "#283544";
            button1.style.color = "white";

            content2.style.display = "none";
            content3.style.display = "none";
            button2.style.backgroundColor = "white";
            button2.style.color = "black";
            button3.style.backgroundColor = "white";
            button3.style.color = "black";
          break;
        case 2:
            content2.style.display = "block";
            button2.style.backgroundColor = "#283544";
            button2.style.color = "white";

            content1.style.display = "none";
            content3.style.display = "none";
            button1.style.backgroundColor = "white";
            button1.style.color = "black";
            button3.style.backgroundColor = "white";
            button3.style.color = "black";
          break;
        case 3:
            content3.style.display = "block";
            button3.style.backgroundColor = "#283544";
            button3.style.color = "white";

            content1.style.display = "none";
            content2.style.display = "none";
            button1.style.backgroundColor = "white";
            button1.style.color = "black";
            button2.style.backgroundColor = "white";
            button2.style.color = "black";
          break;
        
        default:
            content1.style.display = "block";
            button1.style.backgroundColor = "#283544";
            button1.style.color = "white";

            content2.style.display = "none";
            content3.style.display = "none";
            button2.style.backgroundColor = "white";
            button2.style.color = "black";
            button3.style.backgroundColor = "white";
            button3.style.color = "black";
      }
  }

  let slideIndex = 0;
  showSlides();
  
  function showSlides() {
    let i;
    let slides = document.getElementsByClassName("OurProduct");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 4000); // Change image every 2 seconds
  }

  let slide_Index = 0;
  showSlides1();
  
  function showSlides1() {
    let i;
    let slides = document.getElementsByClassName("list1");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slide_Index++;
    if (slide_Index > slides.length) {slide_Index = 1}    
    
    slides[slide_Index-1].style.display = "block";  
    setTimeout(showSlides1, 4000); // Change image every 2 seconds
  }