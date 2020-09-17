---
title: Markdown example
description: Using GitHub-flavored markdown example
enableToc: true
---
# Using GitHub-flavored markdown example

These exercises assume you have [basic markdown knowledge](https://docs.redoc.ly/developer-portal/markdown/).

## Create a new plain markdown page

1. In the `developer-portal` folder, create a new file named `plain.md`.
2. Copy/paste this content into the file (or write some of your own), and save the file.

  ```markdown
  # H1

  Body text.

  ## H2

  Body text.

  ### H3

  Body text.
  ```

**Tip**: The URL in the address bar is localhost:3000/developer-portal/plain. The file name maps to the URL path.

[Take me back to the markdown training exercise](markdown.md)

Once you have created a page, you can add more functionality described below.

### Accessing your new content

#### Link to it from other pages

You can create a link to your `plain.md` page from other pages.

To do this, edit the `markdown.md` file and remove the back ticks around this example.

```markdown
[My first plain markdown page!](plain.md)
```
(Remember to save your file!)

You will notice the terminal will output a message stating that a file changed. Also, you can watch your page in the browser and notice it will update automatically.

![markdown file changed](./images/markdown-file-changed.png)

To access the page, click on your link.

#### Link to it from navigation

You can also link to your page from various navigation elements:
- top navigation
- footer navigation
- sidebar navigation

If you link to it from sidebar navigation, the sidebar will display on the page.

You will learn about linking from navigation in another training exercise.

## Add an image to your markdown page

To add an image manually, copy/paste this into your page.
```markdown
![markdown file changed](./images/markdown-file-changed.png)
```

You can add an image anywhere in the directory structure.
We recommended using `developer-portal/images/` directory path to store the training exercise images.
Note: The relative path to the image file is from the markdown file you are referencing it from.

**Tips**
- If the image looks blurry, it may be related to the development server. Refresh your browser page and the image should load.
- If the image is broken (does not load), it indicates the path to the image is incorrect.
The `./` start means starting from the current directory.
The `../` moves up to the parent directory.
And `../../` moves up two levels.


Training exercise accomplished?

## Add a video to your markdown page

You can find a video online and copy the "embed" code (or use this below).
```
<iframe width="560" height="315" src="https://www.youtube.com/embed/NcEHOlnAY6A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
```

Paste it in the markdown and voila!

<iframe width="560" height="315" src="https://www.youtube.com/embed/NcEHOlnAY6A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Review

At the end of this topic, you would have:
- Created a new file, ending with the `.md` file extension. You can view the name in the URL path in the browser bar (the full path includes any folders it is in).
- Included images and videos on your page.
