/**
 * Created by Fan on 18-4-12.
 */
import store from 'store'

const TokenKey = 'User-Token'

export function getToken () {
  return store.get(TokenKey)
}

export function setToken (token) {
  return store.set(TokenKey, token)
}

export function removeToken () {
  return store.remove(TokenKey)
}
