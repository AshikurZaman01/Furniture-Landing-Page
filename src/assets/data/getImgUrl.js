function getImgUrl(name) {
    return new URL(`../images/products/${name}`, import.meta.url).href
}

export { getImgUrl };