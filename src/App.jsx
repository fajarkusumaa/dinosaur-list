import "./App.css";

import MainPage from "./pages/MainPage";

// import Sidebar from "./Sidebar";

function App() {
    return (
        <>
            <div
                style={{
                    backgroundImage: `url(
                        "https://img.freepik.com/premium-photo/pale-brown-vintage-paper-texture-background-kraft-paper-horizontal-with-unique-design-paper-soft-natural-paper-style-aesthetic-creative-design_364465-212.jpg?w=2000"
                    )`,
                    backgroundSize: "cover",
                    filter: "saturate(0.5)"
                }}
            >
                {/* <AnimalList /> */}
                <MainPage />
            </div>
        </>
    );
}

export default App;
