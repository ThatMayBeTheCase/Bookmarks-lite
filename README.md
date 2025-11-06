# Bookmarks Lite

Ett litet webbläsarverktyg för att spara länkar (titel + URL) och visa dem i en lista (bokmärken).

## Innehåll
- [Bakgrund](#bakgrund)
- [Funktioner](#funktioner)
- [Tekniker](#tekniker)
- [Arbetsflöde](#arbetsflöde)
- [Kom igång](#kom-igång)
- [PR reviews](#pr-reviews)
- [Konflikter](#konflikter)

## Bakgrund
Detta projekt är gjort inom utbildningen **MU25** som en del av examinationen för versionshantering och strategier med Git.

## Funktioner
- Lägga till bokmärke via formulär
- Validering av titel och URL
- Normalisering av URL (lägger på `https://` om det saknas)
- Visar “inga bokmärken” när listan är tom
- Senast tillagda visas överst
- Ta bort-knapp till sparade bokmärke
- Öppna i ny flik funktion
- Persistens med localStorage
- Dubblettskydd

## Tekniker
- HTML, CSS, JavaScript
- Enkel DOM-manipulation
- Git + GitHub

## Arbetsflöde
- Trello: [Bookmarks-Lite](https://trello.com/b/9ns4mnVP/mu25-bookmark-app)
- 1 kort i Trello &rarr; 1 feature-branch &rarr; 1 PR &rarr; squash till `main`
- `main` uppdateras bara via PR
- Se Trello för user stories, AC och status

## Kom igång
Live Demo: [Bookmarks-Lite](https://thatmaybethecase.github.io/Bookmarks-lite/)  
Om du önskar köra det lokalt:
   ```bash
   git clone https://github.com/ThatMayBeTheCase/Bookmarks-lite.git
   cd Bookmarks-Lite
```
Öppna sedan `index.html` i valfri webbläsare.

## PR reviews
### Given:
- [review 1](https://github.com/VitaliyBeletskiy/mu25-git-agile-bookmarks-mini/pull/3#pullrequestreview-3416300542)

- [review 2](https://github.com/VitaliyBeletskiy/mu25-git-agile-bookmarks-mini/pull/4#pullrequestreview-3417133705)

### Mottagen:
- [review 1](https://github.com/ThatMayBeTheCase/Bookmarks-lite/pull/2#pullrequestreview-3411508619)

## Konflikter
[konflikt länk](https://github.com/ThatMayBeTheCase/Bookmarks-lite/pull/12/#issuecomment-3498023243)

---

