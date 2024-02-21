export const getLang = (localStorage: Storage) => (localStorage.getItem('lang') as 'ru' | 'en') || 'en'
