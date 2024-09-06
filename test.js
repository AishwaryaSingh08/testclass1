function d() {
    let b=document.getElementById("r1").value;

    if(b==1)
    {
    var img = document.createElement("img");
    img.src = "4-dots.png";
    var src = document.getElementById("div");
    src.appendChild(img);
    }
   
    
    else{
        if(b==2)
            {
            var img = document.createElement("img");
            img.src = "a.png";
            var src = document.getElementById("div");
            src.appendChild(img);

            var img1 = document.createElement("img");
            img1.src = "a.png";
            var src = document.getElementById("div");
            src.appendChild(img1);
           
            }
    }
}