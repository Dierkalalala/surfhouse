new Vue({
    el: '#wrapper',
    data: {
        newItems: [
            {
                image: 'media/image.jpg',
                name: 'Single Thrtttuster 2014',
                cost: '€.865.00'
            },
            {
                image: 'media/image.jpg',
                name: 'Freestyle Wave FSW',
                cost: '€.770.50'
            },
            {
                image: 'media/image.jpg',
                name: 'The White Collection SURFBOARD 2014',
                cost: '€.1,580.70'
            },
            {
                image: 'media/image.jpg',
                name: 'OG SCALLOP SOLID',
                cost: '€.765.00'
            },
            {
                image: 'media/image.jpg',
                name: 'STRIPE 19 QS',
                cost: '€.230.50'
            },
            {
                image: 'media/image.jpg',
                name: 'YOKE 19 QS',
                cost: '€.1,130.70'
            }
        ],
        topItems: [
            {
                image: 'media/image.jpg',
                name: 'ushingham Lightning 2014 ',
                cost: '€.2,960.95'
            },
            {
                image: 'media/image.jpg',
                name: 'CYPHER HEAT VES M',
                cost: '€.849.95'
            },
            {
                image: 'media/image.jpg',
                name: 'SYNCRO WOMENS  + QS M',
                cost: '€.1,110.99'
            }
        ],
        SaleProducts: [
            {
                image: 'media/image.jpg',
                name: 'SYNCRO MENS QS M',
                cost: '€.249.95'
            },
            {
                image: 'media/image.jpg',
                name: 'RAMOS - SHIRT FOR MEN',
                cost: '€.459.65'
            },
            {
                image: 'media/image.jpg',
                name: 'SixSixOne Evo Wired Full Face ',
                cost: '€.240.00'
            }
        ]
    },
    methods: {
        openMenu() {
            this.$refs.menu.classList.toggle('menu_active')
            this.$refs.burger.classList.toggle('menu_active')
            this.$refs.menu.classList.remove('menu__animation')
        },
        closeMenu() {
            this.$refs.menu.classList.add('menu__animation')
            setTimeout(this.openMenu, 2000)
        },
        showModal() {
            this.$refs.modal.classList.toggle('modal_active')
            document.documentElement.classList.toggle('prevscrolling')

        }
    },
    mounted: function () {
        let socialBlocks = document.getElementsByClassName('socials__big-block')
       Array.prototype.forEach.call(socialBlocks, block => {
           block.addEventListener('click', this.showModal)
       })
        this.$refs.closeModal.addEventListener('click', this.showModal);
        setTimeout(() => {
            let preloader = document.getElementById('preloader')
            if (!preloader.classList.contains('loaded')) {
                preloader.classList.add('loaded')
            }
        }, 1000)
    }
});

