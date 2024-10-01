let allProjects = [];

window.onload = function () {
    loadProjects();
};

function loadProjects() {
    let url = "projects.json";
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if(xhr.readyState === XMLHttpRequest.DONE){
            if(xhr.status == 200) {
                let projects = JSON.parse(xhr.responseText);
                for (let obj in projects) {
                    allProjects = projects[obj];
                }
                //alert("Projects data is ready!")
                console.log("Let's render some project cards!");
                console.log(allProjects);
                console.log("length is " + allProjects.length);

                //buildTable();
                buildCards();
            }
        }
    };
    xhr.open("GET", url, true);
    xhr.send();
}


// ***** Build Project Cards on body
function buildCards() {
    //let arr = text.projects; // get JS Objects
    //console.log(arr);
    
    console.log("length is " + allProjects.length);

    let container = document.querySelector("#cardsOutput");

    for (let i = 0; i < allProjects.length; i++) {
      let row = allProjects[i];

      console.log(row);
    
       let card = document.createElement("div");
       card.classList.add("card");
       card.style.width = "18rem";
    
       //here
    
       let body = document.createElement("div");
       body.classList.add("card-body");
    
       let title = document.createElement("h5");
       title.classList.add("card-title");
       title.textContent = row.projectName;
       body.appendChild(title);
    
       let text = document.createElement("p");
       text.classList.add("card-text");
       text.textContent = "Details : " + row.description;
       body.appendChild(text);

       let image = document.createElement("img");
       image.src = row.image;
       //console.log("Url of this image is: " + row.image_url);
       image.classList.add("card-img-top");
       image.alt = row.image;
       body.appendChild(image);
    
    //   let form = document.createElement("form");
    //   form.action = "addtoCart.php"; //addtoCart.php
    //   form.method = "post";
    
    //   let input = document.createElement("input");
    //   input.type = "hidden";
    //   input.name = "itemID";
    //   input.value = row.itemID;
    //   form.appendChild(input);
    
       // Convert the object to a JSON string because
       // value attribute expects a string
       //let rowJSON = JSON.stringify(row);
    
    //   let input1 = document.createElement("input");
    //   input1.type = "hidden";
    //   input1.name = "row";
    //   input1.value = rowJSON;
    //   form.appendChild(input1);
    //   //console.log(row); //JSON object
    //   console.log(rowJSON); //JSON obj string
      
    //   let button = document.createElement("button");
    //   button.type = "submit";
    //   button.name = "addItem";
    //   button.classList.add("btn", "btn-primary");
    //   button.innerHTML = "<i class='fa-solid fa-bag-shopping' style='color: #fff;'></i> Add to Cart";
    //   form.appendChild(button);
    
    //   body.appendChild(form);
       card.appendChild(body);
    
       container.appendChild(card);
    }  
    }


//uses the global array, loops and prints objects in a table
function buildTable() {     
    //Inicia construyendo el encabezado de la tabla
    let html = "<table>";
    html +=
        "<tr><th>Flight Number</th><th>Day</th><th>Time</th><th>Destination</th><th>Pilot</th><th>Co-Pilot</th></tr>";
    for (let i = 0; i < allProjects.length; i++) {
        //objeto temporal para obtener cada elemento del array
        let temp = allProjects[i];
        let projectName = temp.projectName;
        let description = temp.description;
        let image = temp.image;
        let stack = temp.stack;

        //crear cada fila y agregar informacion de celdas
        html += "<tr>";
        html += "<td>" + projectName + "</td>";
        html += "<td>" + description + "</td>";
        html += "<td>" + image + "</td>";
        html += "<td>" + stack + ",=</td>";                           
        html += "</tr>";

    }
    html += "</table>";

    document.querySelector("#cardsOutput").innerHTML = html;
    

}