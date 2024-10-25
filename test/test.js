function filterSuggestions() {
    const input = document.getElementById('fav-food').value.toLowerCase();
    const suggestions = document.getElementById('suggestions');
    const items = suggestions.getElementsByTagName('li');

    suggestions.style.display = input ? 'block' : 'none';

    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (item.textContent.toLowerCase().indexOf(input) > -1) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    }
}