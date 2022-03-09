let fetchUser = document.getElementById("fetch-users");

const URL_USER = "https://jsonplaceholder.typicode.com/users";
fetch(URL_USER)
    .then(getusers => {
        return getusers.json();
    })
    .then(data => {
        let html = '';
        var body = document.getElementById("table-location");
        var lengthData = data.length;
        var table = document.createElement("table");
        table.setAttribute("border", 1);
        var tableHeading = document.createElement("thead");
        var tableHeadingRow = document.createElement("tr");
       
        var srHeading = document.createElement("th");
        srHeading.innerHTML = "Sr No.";
        var nameHeading = document.createElement("th");
        nameHeading.innerHTML = "Name";
        var emailHeading = document.createElement("th");
        emailHeading.innerHTML = "Email";
        var phoneHeading = document.createElement("th");
        phoneHeading.innerHTML = "Phone";
        var siteHeading = document.createElement("th");
        siteHeading.innerHTML = "website";
        tableHeadingRow.appendChild(srHeading);
        tableHeadingRow.appendChild(nameHeading);
        tableHeadingRow.appendChild(emailHeading);
        tableHeadingRow.appendChild(phoneHeading);
        tableHeadingRow.appendChild(siteHeading);
        tableHeading.appendChild(tableHeadingRow);
        table.appendChild(tableHeading);
        body.appendChild(table);
        var tableBody = document.createElement("tbody");
        table.appendChild(tableBody);
        data.map(function (usersData) {
            var tableDataRow = document.createElement("tr");
            var srData = document.createElement("td");
            srData.innerHTML = usersData.id;
            var nameData = document.createElement("td");
            nameData.innerHTML = usersData.name;
            var emailData = document.createElement("td");
            emailData.innerHTML = usersData.email;
            var phoneData = document.createElement("td");
            phoneData.innerHTML = usersData.phone;
            var siteData = document.createElement("td");
            siteData.innerHTML = usersData.website;
            tableDataRow.appendChild(srData);
            tableDataRow.appendChild(nameData);
            tableDataRow.appendChild(emailData);
            tableDataRow.appendChild(phoneData);
            tableDataRow.appendChild(siteData);
            tableBody.appendChild(tableDataRow);

           
        })
      
    })