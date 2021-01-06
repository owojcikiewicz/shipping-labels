const button = document.getElementById("button-submit");

button.addEventListener("click", async _ => {
    let formdata = {
        "sender": document.getElementById("sender").value,
        "recipient": document.getElementById("recipient").value,
        "carrier": document.getElementById("carrier").value,
        "address": document.getElementById("address").value,
        "notes": document.getElementById("notes").value
    };

    axios({
        method: "post",
        url: "http://localhost:5000/create",
        data: {
            sender: formdata["sender"],
            recipient: formdata["recipient"],
            carrier: formdata["carrier"],
            address: formdata["address"],
            notes: formdata["notes"]
        }
    })
    .then(res => {
        if (res.status == 400) {
            swal("Error", "Please make sure all paramters are filled!", "error");
            return;
        };

        if (res.status == 500) {
            swal("Error", "An internal server error occurred!", "error");
            return;
        };
    })
    .catch(err => {
        console.log("Error: " + err);
    });
});