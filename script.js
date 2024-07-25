async function showAlert() {
    const response = await fetch('https://discord.com/api/webhooks/1127868298055385208/-0ZZKD5RagmCed-FXssKy9rMbHXate31Rd9Q60aV-1PkJW-XsApJ9ajHQTxnwWIeiJJu', {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
    if (!response.ok) {
alert('failed fetching');
    }else{
    alert('Button clicked!');
    }
}
