// Student class
class Student {

    constructor(name, rollNumber, department, cgpa) {
        this.name = name;
        this.rollNumber = rollNumber;
        this.department = department;
        this.cgpa = cgpa;
    }
}


// Select the button
const button = document.getElementById("createProfile");


// Add click event
button.addEventListener("click", function () {

    // Get values from input fields
    const name = document.getElementById("name").value;
    const rollNumber = document.getElementById("rollNumber").value;
    const department = document.getElementById("department").value;
    const cgpa = document.getElementById("cgpa").value;


    // Check whether all fields are filled
    if (name === "" || rollNumber === "" || department === "" || cgpa === "") {
        alert("Please fill all the fields.");
        return;
    }


    // Create Student object
    const student = new Student(
        name,
        rollNumber,
        department,
        cgpa
    );


    // Select profile container
    const profileContainer = document.getElementById("studentProfile");


    // Clear previous profile
    profileContainer.innerHTML = "";


    // Create profile div dynamically
    const profile = document.createElement("div");

    // Add CSS class
    profile.className = "profile";


    // Create heading
    const heading = document.createElement("h2");

    heading.textContent = "Student Profile";


    // Create student details
    const nameElement = document.createElement("p");
    nameElement.textContent = "Name : " + student.name;


    const rollElement = document.createElement("p");
    rollElement.textContent = "Roll No : " + student.rollNumber;


    const departmentElement = document.createElement("p");
    departmentElement.textContent = "Department : " + student.department;


    const cgpaElement = document.createElement("p");
    cgpaElement.textContent = "CGPA : " + student.cgpa;


    // Add elements to profile
    profile.appendChild(heading);
    profile.appendChild(nameElement);
    profile.appendChild(rollElement);
    profile.appendChild(departmentElement);
    profile.appendChild(cgpaElement);


    // Add profile to webpage
    profileContainer.appendChild(profile);

});
