(() => {


    document.addEventListener('DOMContentLoaded', function () {


        fname = get('.custom_file_input span')[0];
        get('#file_input')[0].addEventListener('change', function (event) {
            const file_name = event.target.files[0].name;
            fname.textContent = file_name;
            get_pdf(`./pdfs/${file_name}`);
        });

        const url_input = get('#url_input')[0];
        url_input.addEventListener('input', (event) => {
            url_input.setAttribute('value', event.target.value);
            get_pdf(event.target.value);
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


        get('#reset_button')[0].addEventListener('click', function() {
            get('.sel_box').forEach(function(select) {
                select.selectedIndex = 0;
            });

            fname.textContent = 'Choose file';

            get('#url_input')[0].value = '';

            get('#file_input')[0].value = '';
        });

        get("#upload_button")[0].onclick = function() {
            var fileInput = get("#file_input")[0];
            var file = fileInput.files[0];
            console.log("File: ", file);

            var urlInput = get("#url_input")[0];
            var url = urlInput.value;
            console.log("URL: ", url);
            
            if (url || fileInput.files.length) {
                get(".chat_window")[0].style.width = "300px";
            }
            // 在這裡添加代碼將文件和URL發送到服務器
        }


    });


})();
