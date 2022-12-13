---
tags:
- Developers
- " Hackathon"
- Messaging
- jha-test-tag
hide_table_of_contents: false
title: J-Ha adding the title of the post in forestry.io.
description: J-Ha adding the post description in forestry.io lorem ipsum dolor sit
  amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
  dolore magna aliqua.
slug: "/jhas-test-post"
authors: peter
image: "/blog/media/2022-12-12-blogpost-2.png"
date: 2022-12-12T06:00

---
import ReactPlayer from 'react-player'

## Should we start with this h2?

Unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.

### How about his H3?

Voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.

Neque porro quisquam est:

* Qui dolorem ipsum quia
* Dolor sit amet, consectetur
* Dipisci velit, sed quia non numquam

How about this numbered list, just for fun?

1. Ut enim ad minima veniam
2. Quis nostrum exercitationem
3. Ullam corporis suscipit laboriosam

Nisi ut aliquid ex ea [commodi consequatur](https://www.lipsum.com/ "Here's a link title")? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?

Here's a code block:

    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve.fallback.fs = false
      }
      return config
    }

### Testing ReactPlayer

I wonder how this ReactPlayer code for displaying a youtube video will work?

<ReactPlayer width="100%" controls url='https://www.youtube.com/watch?v=8_ufTvYBdLo' />