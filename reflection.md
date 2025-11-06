# Reflektion – Git & Agilt

## 1) Egen user story + Acceptance Criteria + INVEST

**Story:**  
Som användare av **Bookmarks Lite** vill jag **spara ett bokmärke** så att **jag snabbt kan återkomma till viktiga sidor**.

**Acceptance Criterias:**
- [x] Titel och URL måste vara ifyllda för att kunna spara.
- [x] Ogiltig URL stoppar sparandet och visar felmeddelande.
- [x] Nytt bokmärke visas överst i listan.
- [x] Tom-meddelande döljs när första bokmärket sparas. 
- [x] Bokmärken sparas i `localStorage`

**INVEST – kort motivering:**
- **I**ndependent: kan byggas utan att sök, delete eller persistens finns.
- **N**egotiable: Beskriver bara vad som ska uppnås och inte exakt hur UI:t ser ut.
- **V**aluable: Utan att kunna spara finns det inget värde i appen, så den ger direkt användarnytta.
- **E**stimable: scope är tydligt, så den går att tids- och poängsätta.
- **S**mall: -
- **T**estable: Alla AC går att varifiera i UI.  

## 2) Sprintmål + Definition of Done (DoD)
**Sprintmål:**
Få en första fungerande version av Bookmarks Lite där användaren kan skapa, visa, ta bort och spara bokmärken lokalt, byggt via feature-branches och PR.  

**DoD:**
- [x] Kod kör lokalt utan fel i webbläsaren
- [x] PR skapad från feature-branch och review-kommentarer hanterade
- [x] README uppdaterad med aktuell status/Trello-länk
- [x] Trello-kortet flyttat till "done" vid merge

## 3) Retro: Start / Stop / Continue
- **Start:**
- Börja skriva tydligare PR beskrivningar.
speciellt "how to test" sektionen.
- Börja göra små UI-fixar i egna `style/..`-brancher istället för att blanda dem i vissa feature-PR.
- **Stop:**
- Sluta göra flera ändringar i samma fil utan att nämna dem i PR-beskrivningen.
- Sluta göra små ändringar i en orelevant feature branch.
- **Continue:**
- Fortsätta med 1 trello-kort &rarr; 1 branch &rarr; 1 PR &rarr; squash till `main`.
- Fortsätta med **feature/docs/style** branch namn etc.

Minst **en** konkret förbättring du provar nästa sprint och *varför*.
- Bättre/mer kosekventa PR beskrivningar så det är lättare att läsa och förstå mina ändringar samt hur det har testats. Jag tycker jag gjorde vissa PR bättre än andra, så mer konsekvent framöver.


## 4) Hänvisningar (VG)
- **Förbättring 1**:
-  Jag lyssnade på reviews och bytte från inline-display till en CSS-klass för tom-state, det separerade logik och styling vilket var mycket bättre.  
<[länk till PR](https://github.com/ThatMayBeTheCase/Bookmarks-lite/pull/2#issuecomment-3481229258)>
- **Förbättring 2**: 
- Jag lade till dubblettskydd, eftersom första versionen tillät samma URL flera gånger.  
<[länk till PR](https://github.com/ThatMayBeTheCase/Bookmarks-lite/pull/10)>

## Självkritik
- Jag skulle kunna förbättra mitt dublettskydd så den tar fler 'edge cases' då den nu är väldigt basic.
- Jag skulle kunna byta ut min `confirm()` vid borttagning av bokmärke till stylad `<dialog>` så det får samma UI som resten av sidan.