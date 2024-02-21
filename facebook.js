let createForm = document.querySelector('.form-create');
let closeBtn = document.querySelector('.closeBtn');
let containerEl = document.querySelector('.container');
let createAccount = document.querySelector('.create-account');
let fade = document.querySelector('.fade');
let formLogin = document.querySelector('.form-login');
let colEl = document.querySelector('.col1');
let createPage = document.querySelector('.create-page');
let footer = document.querySelector('footer')

createAccount.addEventListener('click', function() {
    if(createAccount.className === 'create-account') {
        createForm.style.display = 'block';
        formLogin.classList.add('fade');
        colEl.classList.add('fade');
        createPage.classList.add('fade');
        footer.style.display = ' none';
    } 
});


closeBtn.addEventListener('click', function () {
    createForm.style.display = 'none';
    footer.style.display = 'block';
    formLogin.classList.remove('fade')
    colEl.classList.remove('fade')
    createPage.classList.remove('fade');
})

