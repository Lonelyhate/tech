export default class Tabs {
    constructor(tabNamesSelector, tabBtnSelector, tabContentSelector) {
        this.tabsNames = document.querySelectorAll(tabNamesSelector)
        this.tabBtn = document.querySelector(tabBtnSelector)
        this.tabContent = document.querySelectorAll(tabContentSelector)
        this.tabClass = tabNamesSelector.slice(1)

        this.hideTabs = this.hideTabs.bind(this)
        this.showTabs = this.showTabs.bind(this)
        this.render = this.render.bind(this)

        this.hideTabs()
        this.showTabs()
        this.render()
    }

    hideTabs() {
        this.tabContent.forEach(item => {
            item.classList.add('tabs_hide')
            item.classList.remove('tabs_show', 'opac-anim')
        })

        this.tabsNames.forEach(item => {
            item.classList.remove('tabs_active')
        })
    }

    showTabs(i = 0) {
        this.tabContent[i].classList.remove('tabs_hide')
        this.tabContent[i].classList.add('tabs_show', 'opac-anim')

        this.tabsNames[i].classList.add('tabs_active')
    }

    render() {
        this.tabBtn.addEventListener('click', e => {
            if(e.target && e.target.classList.contains(this.tabClass)) {
                this.tabsNames.forEach((item, i) => {
                    if(e.target == item) {
                        this.hideTabs()
                        this.showTabs(i)
                    }
                })
            } 
        })
    }
}