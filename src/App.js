import Navbar from "./components/Navbar";

function App() {
    let myName = 'Monti'
    return (
        <>
            <Navbar name = {myName} city = "Newport News"/>
            <div className="container">
                <h1>Hello {myName}</h1>
            </div>
        </>
        );
}

export default App;
