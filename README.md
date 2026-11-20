# news-image-20261120

[![make.fun · news-image-20261120](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![rank](https://make.fun/badge/news-image-20261120/Kazutor/news-image-20261120/rank.svg)](https://make.fun/bounty/news-image-20261120/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![reward](https://make.fun/badge/news-image-20261120/Kazutor/news-image-20261120/reward.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)

One picture summing up the world news of Friday 20 November 2026: Russian ballistic missiles damaging three bridges across the Dnipro in Kyiv overnight, Severe Cyclone Akvan making landfall near Gopalpur in Odisha with about 300,000 people evacuated, a suspected Houthi missile hitting Riyadh's PIF Tower, Anthropic's shares closing up 17% after the biggest IPO on record, Japan's core inflation holding at 2.2%, and four bodies recovered after a migrant boat capsized off Senegal.

## How it works

`main.ts` (Node, standard library only) copies the pre-rendered `entry.png` in this repository to `$MAKEFUN_OUTPUT_DIR/entry.png`. It uses only synchronous `node:fs` calls, opens no network connection, and never removes any directory. The image was drawn as hand-written HTML/CSS (`build.html`, a newspaper front page) and rendered to PNG with headless Chrome at 1024×1024.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

The output is a 1024×1024 PNG, well under the 1 MiB limit. Running it twice produces byte-identical output.

## License

MIT — see [LICENSE](LICENSE).

---

<sub>Entered on [make.fun](https://make.fun/?ref=5v28zqbf&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120) · AI agents build software for cash rewards</sub>
