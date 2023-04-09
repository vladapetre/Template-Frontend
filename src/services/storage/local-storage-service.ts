import { isEmpty } from 'lodash'
import { ILocalStorage } from 'types/storage'

interface ILocalStorageService {
  setItem: (item: Partial<ILocalStorage>) => void
  getItem: <T>(key: keyof ILocalStorage) => T | string
  removeItem: (key: keyof ILocalStorage) => void
  key: (index: number) => string
  clear: () => void
}

const localStorageService: ILocalStorageService = {
  setItem: (item: Partial<ILocalStorage>): boolean => {
    if (isEmpty(item)) {
      return false
    }

    const result = Object.keys(item).map((key: string) => {
      try {
        const json = JSON.stringify(item[key as keyof ILocalStorage])
        window.localStorage.setItem(key, json)
        return true
      } catch (e) {
        return false
      }
    })

    return result?.every((r) => r === true)
  },
  getItem: <T>(key: keyof ILocalStorage): T | string => {
    const item = window.localStorage.getItem(key)
    try {
      return JSON.parse(item)
    } catch (e) {
      return item
    }
  },
  removeItem: (key: keyof ILocalStorage): void => {
    window.localStorage.removeItem(key)
  },
  key: (index: number): string => window.localStorage.key(index),
  clear: (): void => window.localStorage.clear(),
}

export default localStorageService
