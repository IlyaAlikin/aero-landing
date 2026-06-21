// Navigation items — labels & widths exactly from Figma (57:78), anchored to sections.
export interface NavLink {
  label: string
  href: string
  width: number
  accent?: boolean
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Что внутри?', href: '#course', width: 150 },
  { label: 'Об авторе', href: '#author', width: 150 },
  { label: 'Отзывы учениц', href: '#reviews', width: 150 },
  { label: 'Оплата', href: '#pricing', width: 100 },
  { label: 'Telegram канал', href: '#telegram', width: 150 },
  { label: 'FAQ', href: '#faq', width: 79 },
  { label: 'Служба заботы', href: '#faq', width: 169, accent: true },
]
