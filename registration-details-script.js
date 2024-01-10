document.addEventListener("DOMContentLoaded", function () {
    // Retrieve user details from localStorage
    const userDetails = JSON.parse(localStorage.getItem("userDetails"));

    // Get the userDetails div
    const userDetailsDiv = document.getElementById("userDetails");

    // Create a list to display user details
    const detailsList = document.createElement("ul");

    for (const key in userDetails) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<strong>${key}:</strong> ${userDetails[key]}`;
        detailsList.appendChild(listItem);
    }

    // Append the details list to the userDetailsDiv
    userDetailsDiv.appendChild(detailsList);
});
