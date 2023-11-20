
function Navbar() {
    return(
        <header>
        <nav>
            <div class="nav-left">
                <a href="./index.html"><div class="logo">Joshua Gordon</div></a>
            </div>
            <div class="nav-mid">
                <a href="./index.html"><div class="nav-link">Home</div></a>
                <a href="./cv.html"><div class="nav-link">Resume / CV ▼</div></a>
                <a href="./about-me.html"><div class="nav-link">About Me ▼</div></a>
                <a href="./skills.html"><div class="new">
                    <div class="nav-link">Skills</div>
                    <div class="new-txt">new</div>
                </div></a>
            </div>

            <div class="nav-right">
                <a href="./projects.html"><button id="login"><b>Projects</b></button></a>
            </div>
        </nav>
    </header>
        
    )
}

const sidebar = (
    <aside>
        <div class="profile-card-box">
            <div class="profile-card">
                <div class="profile-picture-side-bar">
                    <img src="https://picsum.photos/300/300" alt=""/>
                </div>
                <div class="profile-picture-txt">
                    <p>Personal Portfolio</p>
                    <p>Employent &#183; Seeking</p>
                </div>
            </div>
            <a href="./contact-info.html"><button class="create-btn-side-bar">Contact me</button></a>
            
        </div>

        <div class="side-bar-menu">

            <a href=""><div class="side-bar-menu-item">
                <div class="side-bar-menu-item-txt">🧠 AI</div>
            </div></a>

            <a href=""><div class="side-bar-menu-item">
                <div class="side-bar-menu-item-txt">💡 DL/ML</div>
            </div></a>

            <a href=""><div class="side-bar-menu-item">
                <div class="side-bar-menu-item-txt">🌄 Image Processing</div>
            </div></a>

            <a href=""><div class="side-bar-menu-item">
                <div class="side-bar-menu-item-txt">📡 Communications</div>
            </div></a>

            <a href=""><div class="side-bar-menu-item">
                <div class="side-bar-menu-item-txt">⚙️ Neural Networks</div>
            </div></a>

            <a href=""><div class="side-bar-menu-item">
                <div class="side-bar-menu-item-txt">👨‍💻 OOP & Languages</div>
            </div></a>

            <a href="./learning.html"><div class="side-bar-menu-item">
                <div class="side-bar-menu-item-txt">📚 Learning</div>
            </div></a>

        </div>

        <div class="side-bar-bottom">
            <a href=""><div class="side-bar-menu-item">
                <svg height="24" width="24">
                    <path d="M 11.03 3.327 a 1.599 1.599 0 0 1 1.94 0 l 7.384 5.61 c 0.407 0.31 0.646 0.795 0.646 1.31 v 9.117 c 0 0.903 -0.723 1.636 -1.615 1.636 h -3.762 a 1.626 1.626 0 0 1 -1.615 -1.636 V 15.88 A 2.015 2.015 0 0 0 12 13.847 a 2.015 2.015 0 0 0 -2.008 2.034 v 3.483 c 0 0.903 -0.723 1.636 -1.615 1.636 H 4.615 A 1.626 1.626 0 0 1 3 19.364 v -9.117 c 0 -0.515 0.24 -1 0.646 -1.31 l 7.385 -5.61 Z m 0.908 1.195 l -7.384 5.61 a 0.144 0.144 0 0 0 -0.054 0.115 v 9.117 c 0 0.08 0.056 0.136 0.115 0.136 h 3.762 c 0.06 0 0.115 -0.057 0.115 -0.136 V 15.88 c 0 -1.953 1.562 -3.534 3.508 -3.534 s 3.508 1.581 3.508 3.534 v 3.483 c 0 0.08 0.056 0.136 0.115 0.136 h 3.762 c 0.059 0 0.115 -0.057 0.115 -0.136 v -9.117 a 0.144 0.144 0 0 0 -0.054 -0.115 l -7.384 -5.61 a 0.099 0.099 0 0 0 -0.124 0 Z" />
                </svg>
                <div class="side-bar-menu-item-txt">Home</div>
            </div></a>

            
        </div>
    </aside>
)


ReactDOM.render(<Navbar />, document.getElementById("nav"))
ReactDOM.render(sidebar, document.getElementById("sidebar"))

const cv = (
    <div><h1>this is my cv</h1></div>
)

ReactDOM.render(cv, document.getElementById("cv"))