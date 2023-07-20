document.addEventListener('DOMContentLoaded', function() {

    document.querySelector('#file-input').addEventListener('change', function(event) {
        const fileName = event.target.files[0].name;
        document.querySelector('.custom-file-input span').textContent = fileName;
    });


    document.querySelector('#button2').disabled = true;
    document.querySelector('.content-output').classList.add('open');

    document.querySelector('#button1').addEventListener('click', function() {
        this.disabled = true;
        document.querySelector('#button2').disabled = false;
        document.querySelector('.content-input').classList.add('open');
        document.querySelector('.content-output').classList.remove('open');
    });
    document.querySelector('#button2').addEventListener('click', function() {
        this.disabled = true;
        document.querySelector('#button1').disabled = false;
        document.querySelector('.content-output').classList.add('open');
        document.querySelector('.content-input').classList.remove('open');
    });
});
