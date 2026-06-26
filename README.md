# Dragon's Den website

A small, hand-built static site for Dragon's Den, a tabletop game shop in
Upper Lake, California. Plain HTML, one CSS file, one JS file. No build step,
no dependencies. Open `index.html` in a browser, or serve the folder.

## Pages
- `index.html`: front page. Name, hours/address, "This Week" glance, four doors.
- `about.html`: the story. Ruby-themed.
- `raffles.html`: current raffle, how to enter, wall of winners. Gold-themed.
- `events.html`: weekly slate plus special one-offs. Emerald-themed.
- `new.html`: what just landed on the shelf. Sapphire/diamond-themed.

## Theme
Vibrant Otaku Pop-Art. A crisp white lightbox base lets the content pop, with
**neon magenta** (#FF1493) as the primary accent, **hyper cyan** (#00E5FF) as the
secondary, **jungle green** (#228B22) for fresh and subtle touches, and **Pikachu
yellow** (#FFD700) on the call-to-action buttons. Neon CSS glows mimic backlit
acrylic signage, tight grids echo the Funko walls and dice bins, and a faint green
vine watermark in the footer nods to the store's faux foliage.

Display font is **Mouse Memoirs** (Google Fonts) for that whimsical, magical feel,
paired with **Nunito** for clean, readable body text. The d20 "20" still marks
section titles, recoloured neon pink.

## Add the logo
Drop the dragon logo image at:

    images/logo.png

It's used as the big hero on the front page and the small corner mark on every
page. Until the file is there, you'll see a tidy placeholder in its spot, and the
site still works. (`.jpg`/`.webp`/`.svg` are fine too; just update the
`src="images/logo.png"` references, or rename your file to `logo.png`.)

Optional photos referenced by the pages (all fall back to a labeled box if
missing): `images/raffle-current.jpg`, `images/new-1.jpg` … `images/new-7.jpg`.

## Fill in the real details
Anything still a placeholder is wrapped in a `[...]` token and highlighted in
orange on the page so it's easy to find. Search the `.html` files for:

- `[HOURS]`: opening hours
- `[ADDRESS]`: street address
- `[PHONE]`: phone number (also fill the `href="tel:"` next to it)
- `[EDIT]`, `[time]`, `[date & time]`, `[Winner]`, `[Prize]`, `[Item]`, etc.:
  sample raffle / event / new-arrival content to replace with the real thing.

Replace the text inside (and remove the `<span class="tk">…</span>` wrapper if
you want to drop the orange highlight).
