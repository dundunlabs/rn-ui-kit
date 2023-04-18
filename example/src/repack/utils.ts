import type { StorageApi } from "@callstack/repack/client"
import type { MMKV } from "react-native-mmkv"

export function mmkvStorage(mmkv: MMKV): StorageApi {
  return {
    async getItem(key) {
      return mmkv.getString(key)
    },
    async setItem(key, value) {
      return mmkv.set(key, value)
    },
    async removeItem(key) {
      return mmkv.delete(key)
    },
  }
}