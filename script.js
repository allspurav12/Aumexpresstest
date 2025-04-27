
function search() {
    const type = document.getElementById('searchType').value;
    const input = document.getElementById('inputField').value.trim();
    const resultDiv = document.getElementById('result');

    if (!input) {
        resultDiv.innerHTML = "Please enter something!";
        return;
    }

    if (type === "pincode") {
        fetch(`https://api.postalpincode.in/pincode/${input}`)
            .then(response => response.json())
            .then(data => {
                if (data[0].Status === "Success") {
                    resultDiv.innerHTML = `Place: ${data[0].PostOffice[0].Name}`;
                } else {
                    resultDiv.innerHTML = "Place not found.";
                }
            })
            .catch(error => {
                console.error(error);
                resultDiv.innerHTML = "Error fetching data.";
            });

    } else {
        fetch(`https://api.postalpincode.in/postoffice/${input}`)
            .then(response => response.json())
            .then(data => {
                if (data[0].Status === "Success") {
                    resultDiv.innerHTML = `Pin Code: ${data[0].PostOffice[0].Pincode}`;
                } else {
                    resultDiv.innerHTML = "Pin code not found.";
                }
            })
            .catch(error => {
                console.error(error);
                resultDiv.innerHTML = "Error fetching data.";
            });
    }
}
