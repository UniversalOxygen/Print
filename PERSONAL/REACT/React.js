// ReactDOM.render(
//     <h1>Hello, Everyone!</h1>, 
//     document.getElementById("root")
// )

// ReactDOM.render(
//     <ul>
//         <li>
//             Orange
//         </li>
//         <li>
//             Mango
//         </li>
//     </ul>,
//     document.getElementById("root")
// ) 

// function mainContent() {
//     return (
//         <h1>OXYGEN First React!</h1>
//     )
// }

// ReactDOM.render (
//     <div>
//         <mainContent />
//     </div>,
//     document.getElementById("root")
// )


// const h1 = document.createElement("h1")
// h1.textContent = "Goke, You will get there!"
// h1.className = "header"
// document.getElementById("root").append(h1)

// ReactDOM.render(<h1>This is JSX</h1>, document.getElementById("root"))

// const navbar = (
//     <nav>
//         <h1>THE BREATH</h1>
//         <ul>
//             <li>Pricing</li>
//             <li>About</li>
//             <li>Contact</li>
//         </ul>
//     </nav>
// )
// ReactDOM.render (
//     navbar,
//     document.getElementById("root")
// )


// const page = (
//     <div>
//         <h1>Moving Foreward!</h1>
//     </div>
// )
// document.getElementById("root").append(JSON.stringify(page ))



// const MainContent = (
//     <div>
//         <img src="./React-logo.png" alt="React Logo"  width="40px"/>
//         <h1>Fun facts about React</h1>
//         <ul>
//             <li>Was first released in 2013</li>
//             <li>Was originally created by Jordan Walke</li>
//             <li>Has well over 100k stars on Github</li>
//             <li>Is maintained by Facebook</li>
//             <li>Power thousands of enterprise apps, including mobile apps</li>
//         </ul>
//     </div>
// )


// ReactDOM.render (
//     MainContent,
//     document.getElementById("root")
// )




function TemporaryContent (){
    return (
        <div>
        <img src="./React-icon.png" alt="React Logo"  width="40px"/>
        <h1>Fun facts about React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100k stars on Github</li>
            <li>Is maintained by Facebook</li>
            <li>Power thousands of enterprise apps, including mobile apps</li>
        </ul>
    </div>
    )
}

ReactDOM.render (<TemporaryContent />, document.getElementById("root"))





function Reason() {
    return (
        <h1>The Big WHY!</h1>
    )
}

function Footer() {
    return (
        <footer className="footer">
            <small>c 2022 UniversalOxyngen development. All right reserved.</small>
        </footer>
    )
}

function List() {
    return (
        <ol>
            <li>To be responsible</li>
            <li>To be valuable</li>
            <li>To be financially stable & marketable</li>
        </ol>
    )
}

function Page() {
    return (
        <div>
            <Header />
            <Reason /> 
            <List />
            <Footer />
        </div>
    )
}    




ReactDOM.render (<Page />, document.getElementById("root"))

