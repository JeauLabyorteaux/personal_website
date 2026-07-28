const body = document.body;

// Light / Dark Mode Toggle Button
const theme_toggle_button = document.createElement('button');

// Single, robust handler for any "Back to Home" button
const backButton = document.getElementById('back-to-home') //|| document.getElementById('resume-back');

// Project Page Project Cards Redirection (only runs if the elements exist on the landing page)
const visit_c3po = document.getElementById('c3po_project');
const visit_ss = document.getElementById('score_send');
const visit_movie = document.getElementById('movie_project');

// Project Page STUDENT Project Cards Redirection (only runs if the elements exist on the landing page)
const visit_r_project = document.getElementById('r_project');
const visit_y_project = document.getElementById('y_project');

// Project Page Links
theme_toggle_button.className = "theme-toggle";
theme_toggle_button.innerHTML = `<img src="assets/images/theme.png" class="mode-icon" alt="Toggle Theme">`;
body.prepend(theme_toggle_button);

// Light / Dark Mode Event Listener
theme_toggle_button.addEventListener('click', function() {
    localStorage.setItem('theme', document.documentElement.classList.toggle('dark-mode') ? 'dark':'light');
});


if (backButton) {
    backButton.addEventListener('click', function() {
        window.history.back();
    });
}



if (visit_c3po) {
    visit_c3po.addEventListener('click', function() {
        window.location.href = 'c3po.html';
    });
}

if (visit_ss) {
    visit_ss.addEventListener('click', function() {
        window.location.href = 'score_sender.html'; // Ensure this matches your file name
    });
}

if (visit_movie) {
    visit_movie.addEventListener('click', function() {
        window.location.href = 'movie_search.html';
    });
}

if (visit_r_project) {
    visit_r_project.addEventListener('click', function() {
        window.location.href = 'r_project_here.html';
    });
}

if (visit_y_project) {
    visit_y_project.addEventListener('click', function() {
        window.location.href = 'y_project_here.html';
    });
}