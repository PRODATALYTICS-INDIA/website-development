/**
 * Insights listing: client-side search/filter + newsletter thanks hash.
 */
(function () {
    const SEARCH_INPUT = document.getElementById('insights-search');
    const RESULTS = document.getElementById('insights-results');
    const EMPTY = document.getElementById('insights-empty');
    const TAG_FILTERS = document.getElementById('insights-tag-filters');
    const THANKS = document.getElementById('newsletter-thanks');

    function showNewsletterThanks() {
        if (!THANKS) return;
        if (window.location.hash === '#newsletter-thanks') {
            THANKS.classList.remove('hidden');
            THANKS.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }

    showNewsletterThanks();
    window.addEventListener('hashchange', showNewsletterThanks);

    if (!SEARCH_INPUT || !RESULTS) return;

    let articles = [];
    let activeTag = null;
    let debounceTimer = null;

    function indexUrl() {
        // From pages/insights/*.html → ../../data/insights-index.json
        return new URL('../../data/insights-index.json', window.location.href).href;
    }

    function esc(str) {
        return String(str == null ? '' : str).replace(/[&<>"']/g, (c) => ({
            '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
        }[c]));
    }

    function normalize(str) {
        return (str || '').toLowerCase();
    }

    function matches(article, query, tag) {
        if (tag && !(article.tags || []).includes(tag)) return false;
        if (!query) return true;
        const hay = normalize(
            [article.title, article.excerpt, ...(article.tags || [])].join(' ')
        );
        return hay.includes(query);
    }

    function render(list) {
        RESULTS.innerHTML = '';
        if (!list.length) {
            EMPTY.classList.remove('hidden');
            return;
        }
        EMPTY.classList.add('hidden');
        list.forEach((article) => {
            const tags = (article.tags || [])
                .map((t) => `<span class="tag-chip">${esc(t)}</span>`)
                .join(' ');
            const card = document.createElement('a');
            card.href = article.href;  // first-party relative URL
            card.className = 'card card-hover block';
            card.innerHTML = `
                <div class="card-icon-container" aria-hidden="true">
                    <svg class="card-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                </div>
                <div class="flex flex-wrap gap-2 mb-3">${tags}</div>
                <h3 class="card-title">${esc(article.title)}</h3>
                <p class="text-xs text-text-secondary mb-3"><time datetime="${esc(article.date)}">${esc(article.date)}</time></p>
                <p class="card-description text-sm">${esc(article.excerpt)}</p>
                <span class="inline-block mt-4 text-accent text-sm font-medium">Read article →</span>
            `;
            RESULTS.appendChild(card);
        });
    }

    function applyFilters() {
        const query = normalize(SEARCH_INPUT.value.trim());
        const filtered = articles.filter((a) => matches(a, query, activeTag));
        render(filtered);
    }

    function renderTagChips() {
        if (!TAG_FILTERS) return;
        const tags = [...new Set(articles.flatMap((a) => a.tags || []))].sort();
        TAG_FILTERS.innerHTML = '';
        const allBtn = document.createElement('button');
        allBtn.type = 'button';
        allBtn.className = 'tag-chip tag-chip-button' + (activeTag === null ? ' tag-chip-active' : '');
        allBtn.textContent = 'All';
        allBtn.addEventListener('click', () => {
            activeTag = null;
            renderTagChips();
            applyFilters();
        });
        TAG_FILTERS.appendChild(allBtn);
        tags.forEach((tag) => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'tag-chip tag-chip-button' + (activeTag === tag ? ' tag-chip-active' : '');
            btn.textContent = tag;
            btn.addEventListener('click', () => {
                activeTag = activeTag === tag ? null : tag;
                renderTagChips();
                applyFilters();
            });
            TAG_FILTERS.appendChild(btn);
        });
    }

    SEARCH_INPUT.addEventListener('input', () => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(applyFilters, 200);
    });

    fetch(indexUrl())
        .then((res) => {
            if (!res.ok) throw new Error('Failed to load insights index');
            return res.json();
        })
        .then((data) => {
            articles = Array.isArray(data)
                ? data.slice().sort((a, b) => (b.date || '').localeCompare(a.date || ''))
                : [];
            renderTagChips();
            applyFilters();
        })
        .catch(() => {
            EMPTY.classList.remove('hidden');
            EMPTY.textContent = 'Unable to load articles. Please refresh the page.';
        });
})();
