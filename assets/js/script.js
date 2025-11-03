
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

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        error.textContent = '';

        const titleInput = document.getElementById('title');
        const urlInput = document.getElementById('url');

        const title = titleInput.value.trim();
        const rawUrl = urlInput.value.trim();
        const normalizedUrl = normalizeUrl(rawUrl);

        if (!title || !normalizedUrl) {
            error.textContent = 'Please enter a title and a valid URL.';
            return;
        }

        // new bookmarks at the top.
        bookmarks.unshift ({
            id: crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(),title,
            url: normalizedUrl,
            createdAt: Date.now()
        });
    })

});
