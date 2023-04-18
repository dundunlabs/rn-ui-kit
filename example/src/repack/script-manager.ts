import { ScriptManager, Script } from '@callstack/repack/client'
import { mmkvStorage } from './utils'
import { storage } from '../lib/mmkv'
import repackConfig from '../../repack.config'
import { Platform } from 'react-native'

ScriptManager.shared.setStorage(mmkvStorage(storage))
ScriptManager.shared.addResolver(async (scriptId, caller) => {
  if (__DEV__) {
    return {
      url: Script.getDevServerURL(scriptId),
      cache: false
    }
  }

  if (repackConfig.LOCAL_CHUNK_REGEX.test(scriptId)) return {
    url: Script.getFileSystemURL(scriptId)
  }

  return {
    url: Script.getRemoteURL(`https://react-native-ui-kit.web.app/${Platform.OS}/remotes/${scriptId}`)
  }
})