export const storage = new Map()

export const incrementStorage = (key: any, val: any) => {
  storage.set(key, storage.get(key) + val)
}

export const exportStorage = () => {
  const object = {}
  storage.forEach((value, key) => {
    var keys = key.split('.'),
      last = keys.pop()
    keys.reduce((r: any, a: any) => (r[a] = r[a] || {}), object)[last] = value
  })
  return JSON.stringify(object)
}
