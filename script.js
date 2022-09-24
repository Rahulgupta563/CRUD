var selectedrow = null;

//show alerts
function showAlert(massage, className) {
    const div = document.createElement("div");
    div.className = `alert alert-${className}`

    div.appendChild(document.createTextNode(massage));
    const container = document.querySelector(".container");
    const main = document.querySelector(".main");
    container.insertBefore(div, main);

    setTimeout(() => document.querySelector(".alert").remove(), 3000);
}

// clear all fields
function clearfields() {
    document.querySelector("#firstName").value = "";
    document.querySelector("#lastName").value = "";
    document.querySelector("#roll Number").value = "";
}


// add data

document.querySelector("#student-form").addEventListener("submit", (e) => {
    e.preventDefault();

    // get form values
    const firstName = document.querySelector("#firstName").value;
    const lastName = document.querySelector("#lastName").value;
    const rollNumber = document.querySelector("#rollNumber").value;

    // validate
    if (firstName == "" || lastName == "" || rollNumber == "") {
        showAlert("please fill in all fields", "danger");
    }
    else {
        if (selectedrow == null) {
            const list = document.querySelector("#student-list");
            const row = document.createElement("tr");

            row.innerHTML = `
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${rollNumber}</td>
            <td>
            <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
            <a href="#" class="btn btn-danger btn-sm delete">Delete</a> 
            
            `;
            list.appendChild(row);
            selectedrow = null;
            showAlert("Student Added", "success");
        }
        else {
            selectedrow.children[0].textContent = firstName;
            selectedrow.children[1].textContent = lastName;
            selectedrow.children[2].textContent = rollNumber;
            selectedrow = null;
            showAlert("Student Info Edited", "Info");


        }

        clearfields();
    }
});

//edit data
document.querySelector("#student-list").addEventListener("click", (e) => {
    target = e.target;
    if(target.classList.contains("edit")){
        selectedrow = target.parentElement.parentElement;
        document.querySelector("#firstName").value = selectedrow.children[0].textContent;
        document.querySelector("#lastName").value = selectedrow.children[1].textContent;
        document.querySelector("#rollNumber").value = selectedrow.children[2].textContent;
    }
});

// delete data

document.querySelector("#student-list").addEventListener("click", (e) => {
    target = e.target;
    if (target.classList.contains("delete")) {
        target.parentElement.parentElement.remove();
        showAlert("Student Data Deleted", "danger");
    }

});