---
title: Markdown example
description: GitHub-Flavored Markdown example
enableToc: true
---
# GitHub-Flavored Markdown example

## Front Matter

```
---
title: Markdown example
description: GitHub-Flavored Markdown example
---
```

The `title` will be automatically used within the sidebar navigation if there is no label defined.

## Numbered lists

1. Wake up
1. Brush teeth
1. Exercise


### Numbered list with code snippets

1. Code snippets in a list.
1. ```javascript
   javascript;
   ```

   ```python
   python
   ```

   ```cpp
   c++
   ```

<pre>
1. Code snippets in a list.
1. ```javascript
   javascript;
   ```

   ```python
   python
   ```

   ```cpp
   c++
   ```
</pre>

## Info blocks

Info blocks:

<div class="warning">Warning: I told you so!</div>

<div class="success">Success: Hooyah!</div>

<div class="danger">Danger: I really told you so!</div>

<div class="attention">Attention: Now that I have your attention...</div>

```html
<div class="warning">Warning: I told you so!</div>
```

## Lists

Sample list:

* Ctrl+S / Cmd+S to save the file
* Ctrl+Shift+S / Cmd+Shift+S to choose to save as Markdown or HTML
* Drag and drop a file into here to load it
* File contents are saved in the URL so you can share files

Look, another list!

* API Reference
* Portal
* Workflows

## Free-form Code samples

And here's some code! 👍

```javascript
javascript;
```

```python
python
```

```cpp
c++
```

<pre>
```javascript
javascript;
```

```python
python
```

```c++
c++
```
</pre>

#### Credits

This is [on GitHub](https://github.com/jbt/markdown-editor) so let me know if I've b0rked it somewhere.

Props to Mr. Doob and his [code editor](http://mrdoob.com/projects/code-editor/), from which
the inspiration to this, and some handy implementation hints, came.

### Stuff used to make this:

* [markdown-it](https://github.com/markdown-it/markdown-it) for Markdown parsing
* [CodeMirror](http://codemirror.net/) for the awesome syntax-highlighted editor
* [highlight.js](http://softwaremaniacs.org/soft/highlight/en/) for syntax highlighting in output code blocks
* [js-deflate](https://github.com/dankogai/js-deflate) for gzipping of data to make it fit in URLs
