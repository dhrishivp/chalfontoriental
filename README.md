# Chalfont Oriental

Website for **Chalfont Oriental** (東軒樓), the Chinese takeaway at 105 White Lion Road, Little Chalfont, Amersham HP7 9JR (01494 762343).

It's a plain static site (HTML, CSS and JS) with no build step.

## Run locally

```sh
python3 -m http.server 8000
# open http://localhost:8000
```

## Editing

- **Menu**: edit `js/menu-data.js`. Each category has a title, an optional note, optional `sizes` labels (e.g. Small / Large), and a list of items. Item fields are listed at the top of the file: `num`, `name`, `desc`, `price` or `prices`, and the `veg`, `hot` and `nuts` tags. The page builds the tabs and lists from this file.
- **Hours**: the hours table is in `index.html` (`#hours`). The live "Open now" badge reads `OPEN_MIN`, `CLOSE_MIN` and `CLOSED_DAYS` in `js/main.js`. The footer, the info strip and the schema markup also show the hours.
- **Photos**: these go in `images/`. The hero uses `chalfont-shop-front.webp`, the About section uses `chalfont-food.webp`, and `chalfont-og.jpg` is the preview image shown when the link is shared.

## Deploy

Drag the folder into Netlify, or connect the repo. `netlify.toml` publishes the root with no build command.

## Still to confirm

- The menu is transcribed from the shop's 2023 printed menu and is a placeholder until the owner confirms the current one. Once it's confirmed, remove the "Menu & prices to be confirmed" note in `index.html`.
- The 2023 menu has no price for #114 (Chicken with Chilli Szechuan Style) or #148 (Roast Pork with Peppers & Black Bean Sauce). Both use £7.60, the price of the dishes around them.
- Hours are Tue–Sun 5:00pm – 10:00pm, with Monday closed (from Cylex, updated Feb 2026). Other listings give closing times between 10:15pm and 11pm.
- The 2023 menu says "Delivery Service Available". The delivery area, minimum order and any delivery charge are unknown.
- Payment methods are unknown.
