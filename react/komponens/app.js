function App(){
    
    return React.createElement( //létre hozunk egy divet
        "div",
        {
            className:"border" //meghívunk egy bootstrapes osztályt
        },
        "App",
        React.createElement(BoxComponent)

 
    );
}
 
//BoxComponens létrehozása a megadott stíluselemekkel
function BoxComponent(props){
    return React.createElement( //létre hozunk egy divet
        "div",
 
        {
 
            style:{
                width:"200px",
                height:"200px",
                backgroundColor:"red",
 
            },
            className:"p-2 m-5 rounded", //meghívunk egy bootstrapes osztályt
        },
    );
}
//az app componens a render függvénnyel meghívja az app-containert
ReactDOM.render (
    React.createElement(App),
    document.getElementById("app-container")
 
);