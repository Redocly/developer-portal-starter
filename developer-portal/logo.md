# Change your logo

## Add your logo

To display your logo in the navbar, overwrite the existing image at `./images/logo.png`.

## Adjust siteConfig

The `siteConfig.yaml` file defines the path to the logo.

```yaml
logo: ./images/logo.png
```

You must adjust this setting if your custom logo has a different file name or path.

## Adjust logo size

To change the logo image size, you must add the `logo` object to  `./theme.ts`:

```ts
logo: {
  height: `50px`,
  margin: `10px 0`,
  maxHeight: `100%`,
  maxWidth: `120%`,
}, 
```

The `logo` object controls how the logo image scales within the navbar.
Note that modifying these options may result in distortion of the logo image.
Changing the logo image height also affects the total height of the navbar.
You can read more about [theme customization](https://redoc.ly/docs/developer-portal/theme/) in the documentation.

## Adjust favicon

You can also overwrite the `./favicon.png` file.
