document.getElementById('searchIcon').addEventListener('click', function() {
    document.getElementById('searchInput').style.display = 'block'; // Show the search input
    document.getElementById('closeIcon').style.display = 'block'; // Show the close icon
    this.style.display = 'none'; // Hide the search icon
    document.getElementById('searchInput').focus(); // Focus the input field
});

document.getElementById('closeIcon').addEventListener('click', function() {
    document.getElementById('searchInput').style.display = 'none'; // Hide the search input
    document.getElementById('searchIcon').style.display = 'block'; // Show the search icon
    this.style.display = 'none'; // Hide the close icon
});