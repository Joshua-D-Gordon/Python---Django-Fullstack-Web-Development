

function Root() {
    return(
        <div>
        <div className="nav">
            <div>
                <img src="https://picsum.photos/60/60"/>
            </div>
            <ul>
                <li>Menu item</li>
                <li>Menu item</li>
                <li>Menu item</li>
            </ul>

            
        </div>

        <h1>This is a test</h1>
        </div>
    )
}

function HeroSection() {
    return(
        <div>
            <img src="https://picsum.photos/100/100"/>
            <ol>
                <li>reason i love react</li>
                <li>reason i love react</li>
                <li>reason i love react</li>
                <li>reason i love react</li>
            </ol>
        </div>
    )
}

function Footer() {
    return(
        <div className="footer">
            <img src="https://picsum.photos/50/50"/>

            <ol>
                <li>footer item</li>
                <li>footer item</li>
                <li>footer item</li>
                <li>footer item</li>
            </ol>
        </div>
    )
}

function Page() {
    return(
    <div>
        <Root/>
        
        <HeroSection/>
        <Footer/>
    </div>
    )
}

ReactDOM.render(<Page/>, document.getElementById('page'))
