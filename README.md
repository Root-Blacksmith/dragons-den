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
Built straight off the logo: black field, **gold** for headings/buttons/dividers,
**dragon-red** for the live "look here" tags, the **four gems** labeling the four
pages, a **d20 "20"** beside section titles, a faint coin pile, and **fire-orange**
as the one hover/live accent.

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
