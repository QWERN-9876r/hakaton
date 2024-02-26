import 'server-only'

const dictionaries = {
    en: () => import('@/data/dictionaries/en.json').then((module) => module.default),
    ru: () => import('@/data/dictionaries/ru.json').then((module) => module.default),
}

export const getDictionary = async (locale: keyof typeof dictionaries) => dictionaries[locale]()
