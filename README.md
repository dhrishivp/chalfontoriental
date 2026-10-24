# Chalfont Oriental

Website for **Chalfont Oriental** (東軒樓), the Chinese takeaway at 105 White Lion Road, Little Chalfont, Amersham HP7 9JR (01494 762343).

It's a plain static site (HTML, CSS and JS) with no build step.

## Run locally

```sh
python3 -m http.server 8000
# open http://localhost:8000
```

## Editing

- **Menu**: edit `js/menu-data.js`. Each category has a title, an optional note, and a list of items (`name`, `desc`, `price`, `from: true` for "from £…" prices, and `hot: true` for a "Hot" tag). The page builds the tabs and lists from this file.
- **Hours**: the hours table is in `index.html` (`#hours`). The live "Open now" badge reads `OPEN_MIN`, `CLOSE_MIN` and `CLOSED_DAYS` in `js/main.js`. The footer, the info strip and the schema markup also show the hours.
- **Photos**: these go in `images/`. The hero uses `shop-front.webp`, the About section uses `food.webp`, and `og-image.jpg` is the preview image shown when the link is shared.

## Deploy

Drag the folder into Netlify, or connect the repo. `netlify.toml` publishes the root with no build command.

## Still to confirm

- The original site (chalfontoriental.mystrikingly.com) couldn't be reached while building this, so the content comes from public listings.
- Prices for items marked `// listed` in `js/menu-data.js` come from the shop's EatEasy and Tastyfind listings. All other items and prices are placeholders. Once the menu is confirmed, remove the "Menu & prices to be confirmed" note.
- Hours are Tue–Sun 5:00pm – 10:00pm, with Monday closed (from Cylex, updated Feb 2026). Other listings give closing times between 10:15pm and 11pm.
- Delivery and payment methods are unknown, so the site only mentions phone orders for collection.
