import GUI from 'lil-gui'
import XpData from './XpData.js'

export default class Context {
    gui = null
    xpData = new XpData()

    onAddDelete() {
        const id = window.prompt('Please input ID')
        if (!id) {
            return
        }
        const xp = this.xpData.getXp(id)
        if (xp) {
            this.xpData.deleteXp(id)
        } else {
            this.xpData.addXp(id)
        }
        this.render()
    }

    getConfig() {
        const c = {}
        const xpList = this.xpData.xpList
        for (const it of xpList) {
            c[it.id] = it.value
        }
        c['Add/Delete'] = () => this.onAddDelete()
        return c
    }

    render() {
        if (this.gui) {
            this.gui.destroy()
        }
        this.gui = new GUI()
        this.gui.title('XPW')
        const config = this.getConfig()
        const xpList = this.xpData.xpList
        for (const it of xpList) {
            this.gui
                .add(config, it.id)
                .onChange((value) => {
                    it.value = value
                    this.xpData.save()
                })
        }
        this.gui.add(config, 'Add/Delete')
        this.gui.onOpenClose(({ _closed }) => {
            this.xpData.setClosed(_closed)
        })
        if (this.xpData.closed) {
            this.gui.close()
        }
    }
}