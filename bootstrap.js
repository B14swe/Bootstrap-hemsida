function submitForm() {
    // Your form submission logic here

    // Display success notification using Bootstrap alert
    var successAlert = document.getElementById('successNotification');
    successAlert.style.display = 'block';

    // Clear form fields
    var fieldIds = ['name', 'email', 'message'];
    fieldIds.forEach(function (id) {
        document.getElementById(id).value = '';
    });

    // Hide the notification after 10 seconds
    setTimeout(function () {
        successAlert.style.display = 'none';
    }, 10000);
}