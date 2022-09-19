import { resolve } from 'path'

export default [
  {
    find: '@thecss/',
    replacement: `${resolve(process.cwd(), './', 'thecss')}/`,
  },
  {
    find: '@src/',
    replacement: `${resolve(process.cwd(), './', 'src')}/`,
  },
]
