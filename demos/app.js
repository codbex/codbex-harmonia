import { Check, ChevronsUpDown, GalleryVerticalEnd, Search } from 'lucide-vue-next'

const app = Vue.createApp({
    data() {
        return {
            data: {
                versions: ['0.1.0', '0.1.1'],
                navMain: [
                    {
                        title: 'Components',
                        url: '#',
                        items: [
                            { title: 'Accordion', url: '/demos/accordion.html', isActive: true },
                            { title: 'Alert', url: '/demos/alert.html', isActive: false },
                            { title: 'Aspect Ratio', url: '/demos/aspect-ratio.html', isActive: false },
                            { title: 'Auto Form', url: '/demos/auto-form.html', isActive: false },
                            { title: 'Avatar', url: '/demos/avatar.html', isActive: false },
                            { title: 'Badge', url: '/demos/badge.html', isActive: false },
                            { title: 'Breadcrumb', url: '/demos/breadcrumb.html', isActive: false },
                            { title: 'Button', url: '/demos/button.html', isActive: false },
                            { title: 'Calendar', url: '/demos/calendar.html', isActive: false },
                            { title: 'Card', url: '/demos/card.html', isActive: false },
                            { title: 'Carousel', url: '/demos/carousel.html', isActive: false },
                            { title: 'Checkbox', url: '/demos/checkbox.html', isActive: false },
                            { title: 'Collapsible', url: '/demos/collapsible.html', isActive: false },
                            { title: 'Combobox', url: '/demos/combobox.html', isActive: false },
                            { title: 'Command', url: '/demos/command.html', isActive: false },
                            { title: 'Context Menu', url: '/demos/context-menu.html', isActive: false },
                            { title: 'Data Table', url: '/demos/data-table.html', isActive: false },
                        ],
                    },
                ],
            },
            selectedVersion: undefined,
            selectedComponent: Vue.ref('Accordion'),
            dropdownOpen: Vue.ref(false),
            search: Vue.ref(''),
            codbexLogo: Vue.ref(''),
        }
    },
    methods: {
        toggleDropdown() {
            this.dropdownOpen = !this.dropdownOpen
        },
        setSelectedVersion(version) {
            this.selectedVersion.value = version
        },
        setSelectedComponent(item) {
            if (!item.isActive) {
                this.selectedComponent = item.title
                this.data.navMain[0].items.forEach((element) => {
                    element.isActive = false
                })
                item.isActive = true
            }
        },
        async getSvg(url) {
            try {
                const response = await fetch(url)
                this.codbexLogo = await response.text()
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        },
    },
    mounted() {
        this.selectedVersion = Vue.ref(this.data.versions[0])
        this.getSvg('https://www.codbex.com/logo.svg')
    },
})
app.use(Harmonia)
app.component('ICheck', Check)
app.component('IChevronsUpDown', ChevronsUpDown)
app.component('IGalleryVerticalEnd', GalleryVerticalEnd)
app.component('ISearch', Search)
app.mount('#app')
