# Separate sidebars

This makes separate sidebars (all within a single `sidebars.yaml` file).

Notice we use the `/*` to eliminate one grouping level in the scissors and rock APIs.
You will visually see the difference between those and the paper API.

```yaml
## different sidebars
rock:
  - page: separated/rock-quickstart.md
  - page: separated/rock.page.yaml/*
paper:
  - page: separated/paper.page.yaml
scissors:
  - page: separated/scissors.page.yaml/*

```

Use these links to visit those APIs:

- [Rock](./rock-quickstart.md)
- [Paper](./paper.page.yaml)
- [Scissors](./scissors.page.yaml)


:::note Pagination
We've paginated the rock, paper, and scissors APIs differently as well.
:::
