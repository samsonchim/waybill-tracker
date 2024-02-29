document.getElementById("waybillForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the input waybill number
    const waybillNumber = document.getElementById("waybillNumber").value.trim();

    // Check if the waybill number matches the required value
    if (waybillNumber === "401HBAM00030") {
        // Display waybill details
        displayWaybillDetails();
    } else {
        alert("Waybill number not found.");
    }
});

function displayWaybillDetails() {
    // Show the hidden div
    document.getElementById("waybillDetails").classList.remove("hidden");

    // Construct the table with waybill details
    const tableHTML = `
        <table>
            <tr>
                <th>Status</th>
                <th>Sender</th>
                <th>Receiver</th>
                <th>Receiver Contact</th>
                <th>From</th>
                <th>To</th>
	<th>Final Destination</th>
            </tr>
            <tr>
                <td><span class="waiting">On-hold</span></td>
                <td>Mr. Joe Eaton</td>
                <td>Mr. Romarick Ahouangan</td>
                <td>+22956917797</td>
                <td>Port of Felixstowe</td>
                <td>Port of Cotonou</td>
	<td>Universite D’abomey Calavi</td>
            </tr>
        </table>
    `;

    // Set the table HTML
    document.getElementById("waybillDetails").innerHTML = tableHTML;
}
