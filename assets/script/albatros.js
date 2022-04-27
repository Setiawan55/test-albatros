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