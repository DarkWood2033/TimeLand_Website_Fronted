import router from './../routes'

function redirect(name){
    if(router.currentRoute.name !== name){
        router.push({ name: name })
    }
}

export default {
    home(){
        redirect('home');
    },
    profile(){
        redirect('auth.profile');
    },
    login(){
        redirect('auth.login');
    }
}
