# Аэродизайн — лендинг

Одностраничник, свёрстанный по макету Figma (`gaEFna5BRenoXLemYoj7kl`, фреймы `57:22` десктоп и `57:389` мобайл).

## Стек
- Nuxt 3 + Vue 3 (`<script setup lang="ts">`, Composition API)
- TypeScript (strict)
- Pinia (состояние FAQ-аккордеона и слайдера отзывов)
- Архитектура Feature-Sliced Design

## Структура (FSD)
```
app/        глобальные стили, дизайн-токены (CSS-переменные), шрифт
pages/      index.vue — сборка виджетов
widgets/    header, hero, benefits, course-content, author, gallery,
            reviews, telegram, offer, faq
features/   faq-accordion, reviews-slider (Pinia-сторы)
shared/     ui (AppButton, WaveEdge), config (nav)
public/img/ ассеты, экспортированные из Figma
```
Зависимости импортируются «сверху вниз»: pages → widgets → features → shared.

## Запуск
```bash
npm install
npm run dev      # http://localhost:3000
```
Прочие команды: `npm run build`, `npm run preview`, `npm run typecheck`.

## Заметки по макету
- Шрифт макета Suisse Intl (коммерческий) заменён на бесплатный **Inter** — по согласованию. Все size/line-height/letter-spacing перенесены 1:1.
- Адаптив: «резиновый» между десктопом (контейнер 1200px) и мобайлом — по согласованию (промежуточных состояний в макете нет).
- Исходные данные Figma (дерево нод, токены, эталонные PNG, спецификации) лежат в `.figma/` для сверки.
