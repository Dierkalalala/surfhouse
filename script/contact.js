class UserMessage {
    constructor(name, email, company, subject, message){
        this.name = name;
        this.email = email;
        this.company = company;
        this.subject = subject;
        this.message = message;

    }
}
new Vue({
    el: '#contact',
    data: {
        name: '',
        email: '',
        company: '',
        subject: '',
        message: ''
    },
    methods:{
        openMenu() {
            this.$refs.menu.classList.toggle('menu_active')
            this.$refs.burger.classList.toggle('menu_active')
            this.$refs.menu.classList.remove('menu__animation')


        },
        closeMenu() {
            this.$refs.menu.classList.add('menu__animation')
            setTimeout(this.openMenu, 2000)
        },
        onSubmit(e){
            const UserMsg = new UserMessage(this.name, this.email,
                this.company, this.subject, this.message)
            console.log(UserMsg)
            let xhr = new XMLHttpRequest()
            xhr.open('POST', 'https://google.com', true )
            xhr.send(UserMsg)

        }

    },

})

