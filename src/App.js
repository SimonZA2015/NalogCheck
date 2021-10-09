import Content from "./assets/Components/Content/Content";

const App = (props) => {

    return (
        <div style={{width: '100vw', height: '100vh'}}>
            <Content dispatch={props.dispatch}/>
        </div>
    );
}

export default App;
