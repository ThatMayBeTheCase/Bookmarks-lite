
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('bookmark-form');
    const list = document.getElementById('bookmark-list');
    const error = document.getElementById('form-error');
    const empty = document.getElementById('empty-state');
    const STORAGE_KEY = 'bookmarks.v1'

    // read from localStorage
    const bookmarks = loadBookmarks();

    function loadBookmarks() {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return [];
        try {
            const parsed = JSON.parse(raw);
            return Array.isArray(parsed) ? parsed : [];
        }
        catch {
            return [];
        }
    }
    
    // Save as JSON for future export/import
    function saveBookmarks() {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(bookmarks));
    }

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
        list.innerHTML = '';

        empty.classList.toggle('hidden', bookmarks.length !== 0);

        if (bookmarks.length === 0) {
            return;
        }

        for (const bm of bookmarks) {
            const li = document.createElement('li');
            li.innerHTML = `
                
                <strong>${bm.title}
                    <button type="button" class="delete-btn" data-id="${bm.id}">
                        Delete
                    </button>
                </strong><br>
                <a href="${bm.url}" target="_blank" rel= "noopener noreferrer">
                ${bm.url}
                </a>
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

        render();

        form.reset();
        titleInput.focus();
    });

    list.addEventListener('click', (event) => {
        if (event.target.matches('.delete-btn')) {
            const id = event.target.dataset.id;

            const ok = confirm('Are you sure you wanna delete this bookmark?');
            if (!ok) {
                return;
            }

            const index = bookmarks.findIndex(bm => bm.id === id);
            if (index !== -1) {
                bookmarks.splice(index, 1);
                render();
            }
        }
    });


    // first render (empty)
    render();
});
