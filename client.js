const modal = document.getElementById('contactModal');
const modalProperty = document.getElementById('modalProperty');

function openModal(propertyName) {
    modal.style.display = 'block';
    modalProperty.textContent = `Lokal: ${propertyName}`;
}

function closeModal() {
    modal.style.display = 'none';
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('message').value = '';
}

async function submitForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();
    const property = modalProperty.textContent.replace('Lokal: ', '');

    if (!name) {
        alert('Proszę podać imię i nazwisko.');
        return;
    }
    if (!email && !phone) {
        alert('Proszę podać email lub telefon.');
        return;
    }

    const templateParams = {
        name: name,
        email: email,
        phone: phone,
        message: message,
        property: property
    };

    try {
        await emailjs.send('service_9bzk2eo', 'template_a4pglud', templateParams);
        alert('Wiadomość została wysłana! Dziękujemy za kontakt.');
        closeModal();
    } catch (error) {
        console.error('EmailJS error:', error);
        alert('Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie.');
    }
}

window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
};

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
