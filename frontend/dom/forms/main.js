const formTest1 = document.getElementById('form_test1');
console.log(formTest1);

const formTestYourName = document.forms.form_test1.your_name;

formTestYourName.addEventListener('input', ()=> {
    let yourNameValue = document.getElementById('your_name_value');
    yourNameValue.textContent = formTestYourName.value;
})

const preview = document.forms.form_test1.preview;

document.forms.form_test1.image_file.addEventListener('change', e => {
    // console.log(e.target.files[0]);
    const uploadFile = e.target.files[0];

    const reader = new FileReader();
    reader.addEventListener('load', () => {
        preview.src = reader.result;
    });
    reader.readAsDataURL(uploadFile);
});