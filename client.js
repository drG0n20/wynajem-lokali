<xaiArtifact artifact_id="86420fa0-eed1-4dcc-b128-23d196f68fb7" artifact_version_id="e63d5bd0-2943-418a-b368-db7a2d14771c" title="client.js" contentType="text/javascript">
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
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    const property = modalProperty.textContent.replace('Lokal: ', '');

    if (!name) {
        alert('Proszę podać imię i nazwisko.');
        return;
    }
    if (!email && !phone) {
        alert('Proszę podać email lub telefon.');
        return;
    }

    const data = { name, email, phone, message, property };

    try {
        const response = await fetch('https://twoj-backend-na-renderze.onrender.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            alert('Wiadomość wysłana! Dziękujemy za kontakt.');
            closeModal();
        } else {
            alert('Wystąpił błąd. Spróbuj ponownie.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Wystąpił błąd. Spróbuj ponownie.');
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
</xaiArtifact>
