document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var course = document.getElementById("course").value;
    var skills = document.getElementById("skills").value
    var graduationYear = document.getElementById("graduationYear").value;
    var dob = document.getElementById("dob").value;
    var address = document.getElementById("address").value;
    var imagelink = document.getElementById("imagelink").value;
  
    // Display submitted data
    var submittedData = document.getElementById("submittedData");
    submittedData.innerHTML = `
    <h2>Identity Card:</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone No:</strong> ${phone}</p>
    <p><strong>Course:</strong> ${course}</p>
    <p><strong>skills:</strong> ${skills}</p>
    <p><strong>Year of Graduation:</strong> ${graduationYear}</p>
    <p><strong>Date of Birth:</strong> ${dob}</p>
    <p><strong>Address:</strong> ${address}</p>
    <p><strong>imagelink:</strong> ${imagelink}</p>
  `;

  //   Clear form inputs
  document.getElementById("registrationForm").reset();
});