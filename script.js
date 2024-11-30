// إضافة تفاعل للنموذج
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const branchName = document.getElementById('branch').value;
    const amount = document.getElementById('amount').value;
    alert(تم إرسال طلب السيولة من ${branchName} بمقدار ${amount} دينار);
});