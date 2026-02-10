# Tella

![](https://raw.githubusercontent.com/opera7133/tella/master/images/screenshot.png)

Tella, A Hugo theme for Companies.

The demo can be seen here: https://tella.pages.dev

## Features

- Responsive
- Carousel (with Splide.js)
- Google Analytics
- Pagination
- Support categories
- Disqus / Giscus
- FontAwesome, Bootstrap Icons

## Installation

### Method 1

Inside the folder of your Hugo site run:

```bash
git clone https://github.com/opera7133/tella themes/tella
```

Updating theme:

```bash
cd themes/tella
git pull
```

### Method 2

Inside the folder of your Hugo site run:

```bash
git submodule add https://github.com/opera7133/tella.git themes/tella
```

Updating theme:

```bash
git submodule update --remote --merge
```

### Install dependencies

You need [Node.js](https://nodejs.org/) before installation.

Copy `package.json` from `themes/tella/exampleSite` to the root folder of your site.

After that, run this command.

```bash
npm install
```

## Getting started

After installing the theme successfully it requires a just a few more steps to get your site running.

### Update config file

Copy the config.toml in the exampleSite to the root of your Hugo site. Change strings as you like.

### Check your site

In order to see your site in action, run Hugo's built-in local server.

```bash
hugo server
```

Now enter `localhost:1313` in the address bar of your browser.

### Build your site

```bash
hugo
```

## Contributing

If you find a bug or have an idea for a feature, feel free to write an [issue](https://github.com/opera7133/tella/issues) or make a PR.

## License

This theme is released under the [MIT license](https://github.com/opera7133/tella/blob/master/LICENSE).
