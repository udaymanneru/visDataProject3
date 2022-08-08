let copyData;

fetch("https://randomuser.me/api/?results=10")
.then(function(response){
    return response.json()
}).then(function(rawData){
    let data = rawData.results;
    copyData = data;
    for(const person of data){
        let name = person.name.first + " " + person.name.last
        let address = person.location.street.number + " " + person.location.street.name + " " + person.location.city + " " + " " + person.location.state + " " + person.location.country;
        let email = person.email;
        let age = person.dob.age;
        let phone = person.phone;

        let image = document.createElement("img");
        image.src = person.picture.large;

        let newPersonContainer = document.createElement("div");
        newPersonContainer.className = "person-container";

        let newInformationContainer = document.createElement("div");
        newInformationContainer.className = "information-container"


        let newName = document.createElement("p");
        newName.innerHTML = "Name: " + name;

        let newAddress = document.createElement("p")
        newAddress.className = "hover-underline-animation"
        newAddress.innerHTML = "Address: " + address;

        let newEmail = document.createElement("p");
        newEmail.className = "hover-underline-animation"
        newEmail.innerHTML = "Email: " + email;

        let newAge = document.createElement("p");
        newAge.className = "hover-underline-animation"
        newAge.innerHTML = "Age: " + age;
        
        let newPhone = document.createElement("p");
        newPhone.className = "hover-underline-animation"
        newPhone.innerHTML = "Phone: " + phone;

        newInformationContainer.append(newName, newAddress, newEmail, newAge, newPhone);
        newPersonContainer.append(image);
        newPersonContainer.append(newInformationContainer);
        
        document.body.appendChild(newPersonContainer);

    }
})


let submitButton = document.getElementById('submit');
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");

submitButton.onclick = function(){
    firstValue = firstName.value;
    lastValue = lastName.value;
    let onScreenDivs = document.querySelectorAll(".person-container")

    if(firstValue != ""){
        for(let i = 0; i < copyData.length; i++){
            let person = copyData[i];
            if(person.name.first.indexOf(firstValue) == -1){
                onScreenDivs[i].style.display = "none";
            }
        }
    }

    if(lastValue != ""){
        for(let i = 0; i < copyData.length; i++){
            let person = copyData[i];
            if(person.name.last.indexOf(lastValue) == -1){
                onScreenDivs[i].style.display = "none";
            }
        }
    }

}