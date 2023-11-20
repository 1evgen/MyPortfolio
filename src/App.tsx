import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Skills} from "./layout/sections/skills/Skills";
import {Works} from "./layout/sections/works/Works";
import {Contact} from "./layout/sections/contacts/Contact";
import {Slogan} from "./layout/sections/slogan/Slogan";
import {Footer} from "./layout/footer/Footer";
import {AboutMe} from "./layout/sections/aboutMe/AboutMe";
import {Test} from "./layout/sections/works/test/Test";


function App() {
    return (
        <div className="App">
                <Header />
                <Main />
                <AboutMe/>
                <Skills/>
                <Works />
                <Contact />
                <Slogan />
            <Test title={'HTML'}/>
                <Footer />


        </div>
    );
}

export default App;

