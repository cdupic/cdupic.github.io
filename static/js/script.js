
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            this.classList.add('active');
            document.getElementById(this.getAttribute('data-target')).classList.add('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            card.classList.toggle('expanded');
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const emailLinks = document.querySelectorAll('.email-link');
    const hoverText = document.getElementById('hover-text');

    emailLinks.forEach(link => {
        link.addEventListener('mouseover', function() {
            hoverText.textContent = this.getAttribute('data-hover');
            hoverText.style.visibility = 'visible';
        });

        link.addEventListener('mouseout', function() {
            hoverText.style.visibility = 'hidden';
        });
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const learnMoreBtn = document.getElementById('learn-more-btn');
    const learnMoreDescription = document.getElementById('learn-more-description');

    learnMoreBtn.addEventListener('click', function(event) {
        event.preventDefault();
        learnMoreDescription.classList.toggle('show');
        learnMoreBtn.textContent = learnMoreDescription.classList.contains('show') ? 'See Less' : 'Learn More';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const pythonCard = document.getElementById('python-card');
    const pythonLibraries = document.getElementById('python-libraries');

    pythonCard.addEventListener('click', function() {
        pythonLibraries.classList.toggle('hidden');
    });
});


document.querySelectorAll('.project-title').forEach(title => {
    title.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target');
        const description = document.getElementById(targetId);

        description.classList.toggle('show');
    });
});

document.getElementById('toggle-about').addEventListener('click', function() {
    document.getElementById('about').classList.toggle('hidden');
});

document.getElementById('toggle-projects').addEventListener('click', function() {
    document.getElementById('projects').classList.toggle('hidden');
});

document.getElementById('toggle-contact').addEventListener('click', function() {
    document.getElementById('contact').classList.toggle('hidden');
});


// Cibler les éléments du DOM
const toggleButton = document.getElementById("about-toggle");
const aboutContent = document.getElementById("about-content");
const fadedText = document.querySelector(".faded-text");

// Ajouter un écouteur d'événement
toggleButton.addEventListener("click", function () {
    // Basculer la classe active sur le contenu
    aboutContent.classList.toggle("active");

    // Modifier le texte et l'apparence du bouton
    toggleButton.querySelector("span").textContent =
        aboutContent.classList.contains("active") ? "⬆" : "➤";

    // Ajuster le texte effacé en fonction de l'état
    fadedText.style.whiteSpace = aboutContent.classList.contains("active") ? "normal" : "nowrap";
    fadedText.style.overflow = aboutContent.classList.contains("active") ? "visible" : "hidden";
    fadedText.style.textOverflow = aboutContent.classList.contains("active") ? "clip" : "ellipsis";

    // Transition fluide de la flèche
    toggleButton.style.marginLeft = aboutContent.classList.contains("active") ? "10px" : "0";
});

// Toggle Theme
const themeSwitch = document.getElementById('theme-switch');
themeSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});

// Animations au scroll
const animatedElements = document.querySelectorAll('[data-animate]');

const handleScroll = () => {
    animatedElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight - 100) {
            el.classList.add('visible');
        }
    });
};






window.addEventListener('scroll', handleScroll);
handleScroll();

