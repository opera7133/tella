# Tella

![](https://user-images.githubusercontent.com/39876629/103476491-9d870880-4df9-11eb-9961-98015b19968c.png)

Tella, A Hugo theme for Companies.

The demo can be seen here: https://tella.pages.dev

## Features

- Responsive
- Carousel
- Google Analytics
- Pagination
- Syntax Highlight
- Support categories
- Disqus

## Installation

### Method 1

Inside the folder of your Hugo site run:

```bash
$ git clone https://github.com/opera7133/tella themes/tella
```

Updating theme:

```bash
$ cd themes/tella
$ git pull
```

### Method 2

Inside the folder of your Hugo site run:

```bash
$ git submodule add https://github.com/opera7133/tella.git themes/tella
```

Updating theme:

```bash
$ git submodule update --remote --merge
```

### Install dependencies

Copy at least the following files from `themes/tella/exampleSite` to the root folder of your site.

- package.json
- tailwind.config.js
- postcss.config.js

After that, run this command.

```bash
$ npm install
```

For more information read the official [setup guide](https://gohugo.io/overview/installing/) of Hugo.

## Getting started

After installing the theme successfully it requires a just a few more steps to get your site running.

### Update config file

Copy the config.toml in the exampleSite to the root of your Hugo site. Change strings as you like.

### Check your site

In order to see your site in action, run Hugo's built-in local server.

```bash
$ npm run start
```

Now enter `localhost:1313` in the address bar of your browser.

### Update the theme

Inside the folder of your Hugo site run:

```bash
$ git submodule update --remote --merge
```

### Build your site

```bash
$ npm run build
```

## Contributing

If you find a bug or have an idea for a feature, feel free to write an [issue](https://github.com/opera7133/tella/issues) or make a PR.

## License

This theme is released under the [MIT license](https://github.com/opera7133/tella/blob/master/LICENSE).
