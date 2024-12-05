// Sélection des éléments du DOM
const passwordForm = document.getElementById('password-form');
const passwordInput = document.getElementById('password');
const hashedPasswordOutput = document.getElementById('hashed-password');
const togglePassword = document.getElementById('toggle-password');
const passwordIcon = document.getElementById('password-icon');

// Fonction pour générer un hash SHA-256
function hashPassword(password) {
    return CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex);
}

// Gestionnaire d'événement pour le formulaire
passwordForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Récupérer la valeur du mot de passe
    const password = passwordInput.value;

    // Générer le hash et l'afficher
    const hashedPassword = hashPassword(password);
    hashedPasswordOutput.value = hashedPassword;
});

// Fonction pour afficher ou masquer le mot de passe
togglePassword.addEventListener('click', function () {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        passwordIcon.classList.remove('fa-eye');
        passwordIcon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        passwordIcon.classList.remove('fa-eye-slash');
        passwordIcon.classList.add('fa-eye');
    }
});
