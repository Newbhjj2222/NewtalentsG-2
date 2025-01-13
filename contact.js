// Shaka divs zose zifite class "team"
const teamDivs = document.querySelectorAll('.team');

// Fungura "team" igihe umuntu akanda
function showTeam() {
    teamDivs.forEach(div => {
        div.style.display = 'block'; // Hindura display kugirango divs zigaragare
    });
}
