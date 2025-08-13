const adminKey = "12345"; // Simple admin key

function trackParcel() {
  const id = document.getElementById('trackingId').value.trim();
  const data = JSON.parse(localStorage.getItem("parcels")) || {};
  const resultDiv = document.getElementById('result');

  if (data[id]) {
    resultDiv.innerHTML = `<strong>Status:</strong> ${data[id]}`;
  } else {
    resultDiv.innerHTML = "Tracking ID not found.";
  }
}

function updateParcel() {
  const key = document.getElementById('adminKey').value.trim();
  const id = document.getElementById('newId').value.trim();
  const status = document.getElementById('newStatus').value.trim();
  const resultDiv = document.getElementById('adminResult');

  if (key !== adminKey) {
    resultDiv.innerHTML = "Invalid admin key.";
    return;
  }

  if (id && status) {
    const data = JSON.parse(localStorage.getItem("parcels")) || {};
    data[id] = status;
    localStorage.setItem("parcels", JSON.stringify(data));
    resultDiv.innerHTML = "Parcel info updated successfully.";
  } else {
    resultDiv.innerHTML = "Please fill in both Tracking ID and Status.";
  }
}
