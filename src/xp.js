export function getXpValue(id) {
    const d = localStorage.getItem('xpw.data')
    if (d) {
        try {
            const parsed = JSON.parse(d)
            // noinspection EqualityComparisonWithCoercionJS
            return parsed.xpList?.find((it) => it.id == id)?.value
        } catch (ignore) {
        }
    }
}