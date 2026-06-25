// Navigation items — labels & widths exactly from Figma (57:78), anchored to sections.
export interface NavLink {
  label: string
  href: string
  width: number
  accent?: boolean
  external?: boolean
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Что внутри?', href: '#course', width: 89 },
  { label: 'Об авторе', href: '#author', width: 86 },
  { label: 'Отзывы учениц', href: '#reviews', width: 118 },
  { label: 'Telegram канал', href: '#telegram', width: 124 },
  { label: 'Оплата', href: '#pricing', width: 73 },
  { label: 'FAQ', href: '#faq', width: 79 },
  { label: 'Служба заботы', href: 'https://t.me/VikaRusskikh', width: 169, accent: true, external: true },
]
