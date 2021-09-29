# Drilldown style of sidebars

This shows the drilldown style of sidebars.

Notice that the `/*` is appended to the `rock.page.yaml` and `paper.page.yaml` files to avoid an extra group.
We remove the `/*` from the `scissors.page.yaml` file so you can see the difference.

```yaml
drilldown-style:
  - page: drilldown/index.md
  - group: Rock
    menuStyle: drilldown
    icon: images/rock.png
    sublabel: Rock API docs
    pages:
      - page: openapi/rock.page.yaml/*
  - group: Paper
    menuStyle: drilldown
    icon: images/paper.png
    sublabel: Paper API docs
    pages:
      - page: openapi/paper.page.yaml/*
  - group: Scissors
    menuStyle: drilldown
    icon: images/scissors.png
    sublabel: Scissors API docs
    pages:
      - page: openapi/scissors.page.yaml
```

:::note Pagination
We've paginated the rock, paper, and scissors APIs differently as well.
:::
