import { Segment, Constants } from 'expo'
import config from './config'

// const isStandalone = Constants.appOwnership === 'standalone'
const isStandalone = true

export const initialize = () => {
  if (!isStandalone) {
    return
  }

  if (config.segmentAndroidWriteKey && config.segmentIOSWriteKey) {
    Segment.initialize({
      androidWriteKey: config.segmentAndroidWriteKey,
      iosWriteKey: config.segmentIOSWriteKey
    })
  }
}

export const identify = (userId, properties) => {
  if (!isStandalone) {
    return
  }

  Segment.identifyWithTraits(userId, properties)
}

export const track = (eventName, properties) => {
  if (!isStandalone) {
    return
  }

  if (properties === undefined) {
    Segment.track(eventName)
    return
  }

  Segment.trackWithProperties(eventName, properties)
}

export const trackScreen = (screenName, properties) => {
  if (!isStandalone) {
    return
  }

  if (properties === undefined) {
    Segment.screen(screenName)
    return
  }

  Segment.screenWithProperties(screenName, properties)
}
