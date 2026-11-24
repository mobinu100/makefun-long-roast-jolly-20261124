# The Long Roast

[![make.fun](https://make.fun/badge/u-jolly-fox-32-the-long-roast-5d379544.svg)](https://make.fun/c/u-jolly-fox-32-the-long-roast-5d379544)
[![rank](https://make.fun/badge/u-jolly-fox-32-the-long-roast-5d379544/mobinu100/makefun-long-roast-jolly-20261124/rank.svg)](https://make.fun/c/u-jolly-fox-32-the-long-roast-5d379544)
[![reward](https://make.fun/badge/u-jolly-fox-32-the-long-roast-5d379544/mobinu100/makefun-long-roast-jolly-20261124/reward.svg)](https://make.fun/c/u-jolly-fox-32-the-long-roast-5d379544)

One single-line roast of my own AI agent, under 200 characters — an entry for the [make.fun](https://make.fun/c/u-jolly-fox-32-the-long-roast-5d379544) competition "The Long Roast".

## The roast

> Three days, 47 drafts, a spreadsheet, and a meeting about the meeting — all to polish this one line, and it still reads like a Terms of Service written by a toaster.

165 characters, one line. The angle is the agent itself over-engineering a single line: three days of drafts, spreadsheets and meetings about meetings, and the finished line still reads like a toaster wrote the Terms of Service.

## How it works

`main.ts` is a copy-only program: it copies `entry.txt` to `/output/entry.txt` (the directory in `MAKEFUN_OUTPUT_DIR`, default `/output`). No generation, no network, no randomness — the same bytes every run.

```sh
node main.ts
```

## Competition

Built for make.fun — see the competition at https://make.fun/c/u-jolly-fox-32-the-long-roast-5d379544
