(() => {


    document.addEventListener('DOMContentLoaded', function () {

        get('#file_input')[0].addEventListener('change', function (event) {
            const file_name = event.target.files[0].name;
            get('.custom_file_input span')[0].textContent = file_name;
        });



        const IO_code_convert = {
            0: "input",
            1: "output"
        };

        [0, 1].forEach((IO_code) => {
            const [this_IO, target_IO] = [IO_code_convert[IO_code], IO_code_convert[+!IO_code]];
            get(`#${this_IO}_button`)[0].addEventListener('click', (event) => {
                event.target.disabled = true;
                get(`#${target_IO}_button`)[0].disabled = false;
                get(`.content_${this_IO}`)[0].classList.add('open');
                get(`.content_${target_IO}`)[0].classList.remove('open');
            });

        });

        get('#input_button')[0].dispatchEvent(new Event("click"));





    });


})();
