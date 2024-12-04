import reactFoodLogo from '../assets/logo.jpg'

export default function Header() {
    return <header id="main-header">
        <div id='title'>
            <img src={reactFoodLogo}/>
            <h1>REACTFOOD</h1>
        </div>
        <button>Cart (number of meal)</button>
    </header>
}