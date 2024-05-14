export default class XpData {

    xpList = []
    closed = false

    constructor() {
        this.load()
    }

    setClosed(closed) {
        this.closed = closed
        this.save()
    }

    getXp(id) {
        return this.xpList.find(it => it.id === id)
    }

    addXp(id) {
        this.xpList.push({ id, value: '' })
        this.save()
    }

    deleteXp(id) {
        const findIndex = this.xpList.findIndex(it => it.id === id)
        if (findIndex > -1) {
            this.xpList.splice(findIndex, 1)
            this.save()
        }
    }

    load() {
        const d = localStorage.getItem('xpw.data')
        if (d) {
            const parsed = JSON.parse(d)
            Object.assign(this, parsed)
        }
    }

    save() {
        const d = JSON.stringify(this)
        localStorage.setItem('xpw.data', d)
    }
}