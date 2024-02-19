# Astro with Tailwind and daisyUI

1. Install Tailwind CSS:
```sh
npm create astro@latest -- --template with-tailwindcss
```
2. Install daisyUI:
```sh
npm i daisyui@latest
```
3.  Then add daisyUI to your `tailwind.config.js` files:
```sh
module.exports = {
  //...
  plugins: [require("daisyui")],
}
```
4. The official Tailwind CSS Typography plugin(`@tailwindcss/typography`) provides a set of prose classes:
```sh
npm install @tailwindcss/typography
```
5.  Then add the plugin to your `tailwind.config.js` files:
```sh
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
}
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/with-tailwindcss)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/with-tailwindcss)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/with-tailwindcss/devcontainer.json)

Astro comes with [Tailwind](https://tailwindcss.com?target="_blank") support out of the box. This example showcases how to style your Astro project with Tailwind and [daisyUI](https://daisyui.com?target="_blank").

For complete setup instructions, please see our [Tailwind Integration Guide](https://docs.astro.build/en/guides/integrations-guide/tailwind?target="_blank") and [daisyUI](https://daisyui.com/docs/install/?target="_blank").
