
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('bookmark-form');
    const list = document.getElementById('bookmark-list');
    const error = document.getElementById('form-error');
    const empty = document.getElementById('empty-state');

    // vår databas i minnet.
    const bookmarks = [];

    function normalizerUrl(value) {
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

});
