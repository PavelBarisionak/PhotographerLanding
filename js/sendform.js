


document.addEventListener('DOMContentLoaded', function(){
    const form = document.querySelector('.contact-form');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);

        let formData = new FormData(form);
        

        if (error===0){
            form.classList.add('_sending'); // пока отправляется форма выводится это
            let response = await fetch('sendmail.php', { // send response
                method: 'POST',
                body: formData
            });
            if (response.ok){
                let result = await response.json();
                alert(result.message);                 
                form.reset(); // очищаем поля формы
                form.classList.remove('_sending'); 
            }else{
                alert('Ошибка');
            }
        }else{
            alert('Заполните обязательные поля');
        }
    }
    function formValidate(form) {   // validation
        let error = 0;
        let formReq = document.querySelectorAll('._req');  
        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];   
            formRemoveError(input);            
            if(input.classList.contains('_email')){
                if (emailTest(input)){
                    formAddError(input);                    
                    error++;
                }
            }  else {
                if (input.value === '') {
                formAddError(input);                        
                error++;
                }
            }                        
        }
        return error;
    }
    function formAddError(input) {        
        input.classList.add('_error');
    }
    function formRemoveError(input) {        
        input.classList.remove('_error');
    }
    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }
});