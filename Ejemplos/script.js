let fps = ["Fútbol", "Deportes", "Gym"];

let orderListEl = document.getElementById("order_list");
for (var i = 0; i < fps.length; i++) {
    let li = document.createElement("li");
    li.innerText = fps[i];
    orderListEl.appendChild(li);
}

fps.forEach(item=> {
    let li = document.createElement("li");
    li.innerText = item;
    orderListEl.appendChild(li);
})

let objects = [

    {
        "name" : "Daw",
        "level" : "superior",
        "modulos" : [{
            "name" : "LGMSI"
        }]
    },
    {
        "name" : "Dam",
        "level" : "basico"
    }



]
