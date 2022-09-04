import './scss/style.scss'
import Header from './component/Header'
import User from './component/User'
import Footer from './component/Footer'

const app = () => {
    document.getElementById('header').innerHTML = Header()
    // document.getElementById('user').innerHTML = User()
    document.getElementById('footer').innerHTML = Footer()
}

app()
