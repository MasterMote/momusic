const rawImgMap: Recordable<Recordable<string>> = import.meta.glob('./*.png', { eager: true })
const imgMap: Recordable = {}
for (const key in rawImgMap) {
  imgMap[key.replace('./', '')] = rawImgMap[key].default
}

export { imgMap }