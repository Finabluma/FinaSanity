export const slugify = (input) =>
  input
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // elimina acentos
    .replace(/ñ/g, 'n') // reemplaza ñ
    .toLowerCase()
    .replace(/\s+/g, '-') // espacios → guiones
    .replace(/[^a-z0-9/-]/g, '') // solo caracteres permitidos
    .replace(/\/+/g, '/') // evita doble slash
    .slice(0, 200)
