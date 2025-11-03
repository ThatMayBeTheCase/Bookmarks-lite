
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('bookmark-form');
    const list = document.getElementById('bookmark-list');
    const error = document.getElementById('form-error');
    const empty = document.getElementById('empty-state');

    // "database" in memory.
    const bookmarks = [];

    function normalizeUrl(value) {
        if (!value) return null;
        const withProto = /^https?:\/\//i.test(value) ? value : `https://${value}`;
        try {
            const url = new URL(withProto);
            return url.toString();
        }
            catch {
            return null;
        }
    }

    function render() {
        // empty list.
        list.innterHTML = '';

        if (bookmarks.length === 0) {
            empty.style.display = 'block';
            return;
        }
        empty.style.display = 'none';

        for (const bm of bookmarks) {
            const li = document.createElement('li');
            li.innerHTML = `
            <strong>${bm.title}</strong><br>
            <span>${bm.url}</span>
            `;
            list.appendChild(li);
        }
    }

});
