---
title: Basics
---

# Basics

## Heading level 2

### Heading level 3

#### Heading level 4

##### Heading level 5

###### Heading level 6

### Basic formatting

Paragraphs can be written like so. A paragraph is the basic block of Markdown. A paragraph is what text will turn into when there is no reason it should become anything else.

Paragraphs must be separated by a blank line. Basic formatting of _italics_ and **bold** is supported. This _can be **nested** like_ so.

### Quote

> Here is a quote. What this is should be self explanatory. Quotes are automatically indented when they are used.

Blockquotes can contain multiple paragraphs. Add a > on the blank lines between the paragraphs.

> Dorothy followed her through many of the beautiful rooms in her castle.
>
> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.

### URLs

URLs can be made in a handful of ways:

- Another named link to [MarkItDown](http://www.markitdown.net/)
- Sometimes you just want a URL or email address like <http://www.markitdown.net/>.

To emphasize links, add asterisks before and after the brackets and parentheses. To denote links as code, add backticks in the brackets.

I love supporting the **[EFF](https://eff.org)**.
This is the *[Markdown Guide](https://www.markdownguide.org)*.
See the section on [`code`](#code).

### Add an image

Image places locally
`![Tux, the Linux mascot](/assets/images/tux.png)`

Image from external source
`![Example](https://redoc.ly/static/source@2x-93452f01bbe4d255cdc21271ae33a342.png)`
![Example](https://redoc.ly/static/source@2x-93452f01bbe4d255cdc21271ae33a342.png)

To add a link to an image, enclose the Markdown for the image in brackets, and then add the link in parentheses.
`[![Example](/assets/images/tux.png)](https://redoc.ly/static/source@2x-93452f01bbe4d255cdc21271ae33a342.png)`

### Video embed
    
    <iframe width="560" height="315" src="https://www.youtube.com/embed/NcEHOlnAY6A" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/NcEHOlnAY6A" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Add a table

|   Row 1  | Row 2 | Row 3 | Row 4 | Row 5 | Row 6 | Row 7 |
|:--------:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|
| Column 1 | Value | Value | Value | Value | Value | Value |
| Column 2 | Value | Value | Value | Value | Value | Value |
| Column 3 | Value | Value | Value | Value | Value | Value |
| Column 4 | Value | Value | Value | Value | Value | Value |
| Column 5 | Value | Value | Value | Value | Value | Value |

Cell widths can vary, as shown below. The rendered output will look the same.

| Syntax | Description |
| --- | ----------- |
| Header | Title |
| Paragraph | Text |

You can align text in the columns to the left, right, or center by adding a colon `:` to the left, right, or on both side of the hyphens within the header row.

| Syntax      | Description | Test Text     |
| :---        |    :----:   |          ---: |
| Header      | Title       | Here's this   |
| Paragraph   | Text        | And more      |

You can format the text within tables. For example, you can add links, code (words or phrases in backticks (`) only, not code blocks), and emphasis.

You can’t add headings, blockquotes, lists, horizontal rules, images, or HTML tags.

### Info blocks

<div class="success">
<b>Note</b>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a mi in massa tempor sagittis. Etiam pellentesque arcu ut nisi posuere fermentum.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a mi in massa tempor sagittis. Etiam pellentesque arcu ut nisi posuere fermentum.
</div>

<div class="danger">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>

<div class="warning">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>

<div class="attention">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>

### Lists

#### Ordered list

1. Item 1
2. A second item
3. Number 3
4. Ⅳ

_Note: the fourth item uses the Unicode character for [Roman numeral four][2]._

#### Unordered list

- An item
- Another item
- Yet another item
- And there's more...

## Horizontal rule

A horizontal rule is a line that goes across the middle of the page.

---

It's sometimes handy for breaking things up.

### Collapsible blocks

<details>
  <summary>Some details</summary>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </p>
</details>

<details>
  <summary>Some details 2</summary>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.    
  </p>
</details>

### Code Blocks

Code blocks are normally indented four spaces or one tab. When they’re in a list, indent them eight spaces or two tabs.

You can also make `inline code` to add code into other things.

### Code snippets

#### Numbered list with code snippets

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

#### Free-form code samples

And here's some code! 👍

```javascript
var now = new Date();

var days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');

var months = new Array(
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
);

var date = (now.getDate() < 10 ? '0' : '') + now.getDate();

function fourdigits(number) {
  return number < 1000 ? number + 1900 : number;
}
today =
  days[now.getDay()] +
  ', ' +
  months[now.getMonth()] +
  ' ' +
  date +
  ', ' +
  fourdigits(now.getYear());

document.write(today);
```

```php
function getDistanceBetweenPointsNew($latitude1, $longitude1, $latitude2, $longitude2) {
    $theta = $longitude1 - $longitude2;
    $miles = (sin(deg2rad($latitude1)) * sin(deg2rad($latitude2))) + (cos(deg2rad($latitude1)) * cos(deg2rad($latitude2)) * cos(deg2rad($theta)));
    $miles = acos($miles);
    $miles = rad2deg($miles);
    $miles = $miles * 60 * 1.1515;
    $feet = $miles * 5280;
    $yards = $feet / 3;
    $kilometers = $miles * 1.609344;
    $meters = $kilometers * 1000;
    return compact('miles','feet','yards','kilometers','meters');
}
```

```python
from datetime import datetime

now = datetime.now()

mm = str(now.month)

dd = str(now.day)

yyyy = str(now.year)

hour = str(now.hour)

mi = str(now.minute)

ss = str(now.second)

print mm + "/" + dd + "/" + yyyy + " " + hour + ":" + mi + ":" + ss
```

```yaml
version: '3'
services:
web:
    # replace username/repo:tag with your name and image details
    image: username/repo:tag
    deploy:
    replicas: 5
    restart_policy:
        condition: on-failure
    resources:
        limits:
        cpus: '0.1'
        memory: 50M
    ports:
    - '80:80'
    networks:
    - webnet
visualizer:
    image: dockersamples/visualizer:stable
    ports:
    - '8080:8080'
    volumes:
    - '/var/run/docker.sock:/var/run/docker.sock'
    deploy:
    placement:
        constraints: [node.role == manager]
    networks:
    - webnet
networks: webnet:
```

```json
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```

```shell
eval $(docker-machine env myvm1)
```
   