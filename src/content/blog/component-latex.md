---
draft: false
title: Рендеринг LaTeX Math в Markdown для Astro
publishDate: 2024-03-01 19:05:00
img: /content/images/latex_project.jpg
img_alt: LaTeX в Markdown для Astro
description: |
  Створення компонента для фреймворку Astro для выдображення.
  Як створити компонент Astro для відображення LaTeX у файлах Markdown або MDX.
tags:
  - LaTeX
  - Markdown
  - Astro
---

## LaTeX

$LaTeX$ - це одне з розширень мови TeX, яка використовується для створення наукових документів і не тільки. Основною перевагою LaTeX є його функціональність - в текст дуже легко вбудовувати математичні формули, код, таблиці та багато іншого, що робить його кращим вибором для використання в технічних та наукових галузях.

$LaTeX$ - це система підготовки та створення документів, що добре відома своєю здатністю створювати високоякісні математичні рівняння та складні формули.

**Приклад**

| Джерело           | Рендеринг      |
| :----:            | :----:         |
|\$E = mc^{2}\$     | $E = mc^{2}$   |
|\$\$E = mc^{2}\$\$ | $$E = mc^{2}$$ |
|                   |                |

## Встановити пакети

Нам потрібно встановити два пакети, які допомагають аналізувати **LaTeX** під час збирання.

Важливо зазначити, що ці пакети перетворюватимуть ваш **LaTeX** на **HTML** так само, як **Astro** перетворює **Markdown** на **HTML**.

Для встановлення запустіть:

```npm
npm install remark-math
```

### <a href="https://www.npmjs.com/package/remark-math" title="remark-math" target="_blank">remark-math</a>

> Цей пакет є уніфікованим додатком для додавання підтримки математичного синтаксису. Пакет використовуватиметься для визначення синтаксису знака долара у файлах .md. По суті, будь-який LaTeX, який ми хочемо відобразити, буде загорнутий в один $ для вбудованого та подвійний $$ для багаторядкового.

### <a href="https://www.npmjs.com/package/rehype-katex" title="rehype-katex" target="_blank">rehype-katex</a>

> Цей пакет фактично виконує синтаксичний аналіз і рендерить математичний LaTeX. Рендер відбувається під час створення сторінки, тому час завантаження нашої сторінки не збільшується.<br>
>
> **<a href="https://katex.org/">$KaTeX$</a> - найшвидша математична бібліотека верстки для Інтернет.**

Для встановлення запустіть:

```npm
npm install rehype-katex
```

### Налаштування конфігурації Astro

Нам потрібно буде повідомити Astro, що ми хочемо використовувати ці два пакети для аналізу markdown під час збирання. Для цього нам потрібно відредагувати файл ```astro.config.mjs```.

В наш конфігураційний файл необхідно додати встановлені плагіни для markdown:

```javascript
import { defineConfig } from 'astro/config';
...
// LaTEX
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
...
 markdown:
 {
  remarkPlugins: [remarkMath],
  rehypePlugins: [rehypeKatex],
 }
});
```

### Додавання таблиці стилів KaTeX

Передостанній крок — додавання $KaTeX$ у тег ```head``` вашого файлу макета Astro для сторінок Markdown. Якщо у вас його ще немає, ви можете легко створити його в ***./src/layouts/MarkdownLayout.astro***, який має виглядати подібно до наведеного нижче фрагмента.

```html
<html lang='en'>
    <head>
        <!-- Katex -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.css"
            integrity="sha384-MlJdn/WNKDGXveldHDdyRP1R4CTHr3FeuDNfhsLPYrq2t0UBkUdK2jyTnXPEK1NQ" crossorigin="anonymous">
    </head>

    <body>
        <slot />
    </body>
</html>
```

> Важливою частиною є наявність таблиці стилів $KaTeX$ у тегу ```head``` і тегу ```<slot />```, які будуть змінювати ваші Markdown файли.

## Приклади LaTEX

$$
\begin{equation}
\frac{1}{2\pi}\int_{-\infty}^{\infty}e^{-\frac{x^2}{2}}dx
\end{equation}
$$

$$
\begin{equation}
R(t)= A \left(\frac{E_0}{\rho_0}\right)^{1/5}t^{2/5}
\end{equation}
$$

$$
\begin{equation}
R(t)= A \left(\frac{E_0}{\rho_0}\right)^{1/5}t^{2/5}
\end{equation}
$$

$$
\begin{equation}
\frac{-b\pm\sqrt{b^2-4ac}}{2a}
\end{equation}
$$

$$
\begin{CD}
   A @>a>> B \\
@VbVV @AAcA \\
   C @= D
\end{CD}
$$

```E = mc^{2}```

$E = mc^{2}$

$$E = mc^{2}$$

$$ L = \frac{1}{2} \rho v^2 S C_L $$

```$\displaystyle \sum$``` <div class="text-center"> $\displaystyle \sum$ </div>
<div class="text-center">

$f(x) = 2x$

$$ f(x) = 2x $$

</div>
<div class="text-center">

$$
\begin{equation}
R(t)= A \left(\frac{E_0}{\rho_0}\right)^{1/5}t^{2/5}
\end{equation}
$$

$$
\begin{equation}
R(t)= A \left(\frac{E_0}{\rho_0}\right)^{1/5}t^{2/5}
\end{equation}
$$

</div>
