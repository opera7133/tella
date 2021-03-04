# Tella
![](https://user-images.githubusercontent.com/39876629/103476491-9d870880-4df9-11eb-9961-98015b19968c.png)

Tella, A Hugo theme for Companies.

The demo can be seen here: https://tella.pages.dev

[![Import this project into Forestry](https://assets.forestry.io/import-to-forestryK.svg)](https://app.forestry.io/quick-start?repo=opera7133/tella&engine=hugo&version=0.80.0&config=exampleSite)
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/opera7133/tella)

## Features
* Responsive
* Carousel
* Google Analytics
* Pagination
* Syntax Highlight
* Support categories
* Disqus

## Prerequisites

Make sure to install `postcss-cli` and `autoprefixer` globally in your environment, as Hugo Pipe’s PostCSS requires it. This is mentioned in the [Hugo Docs](https://gohugo.io/hugo-pipes/postcss/).

```bash
$ npm install -g postcss-cli
$ npm install -g autoprefixer
```

## Installation
Inside the folder of your Hugo site run:

```bash
$ git submodule add https://github.com/opera7133/tella.git themes/tella
$ cd themes/tella
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
$ hugo server
```
Now enter `localhost:1313` in the address bar of your browser.

### Update the theme
Inside the folder of your Hugo site run:

```bash
$ git submodule update --remote --merge
```

## Contributing
If you find a bug or have an idea for a feature, feel free to write an [issue](https://github.com/opera7133/tella/issues) or make a PR.

## License
This theme is released under the [MIT license](https://github.com/opera7133/tella/blob/master/LICENSE).
