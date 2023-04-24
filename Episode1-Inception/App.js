/*
<div id="parent">

    <div id="child">
        <h4 id="head1">Lobelia ...VS...Ouran host club</h4>
        <p id="p1">Lobelia ...VS...Ouran host club</p>
        <p id="p2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, eum omnis! Eos laboriosam nesciunt veritatis provident qui tenetur magni. Laboriosam corrupti ullam molestiae, autem amet architecto deserunt! Nihil, harum accusantium.</p>
    </div>

    <div id="child1">
        <h4 id="head1">Lobelia ...VS...Ouran host club</h4>
        <p id="p1">Lobelia ...VS...Ouran host club</p>
        <p id="p2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, eum omnis! Eos laboriosam nesciunt veritatis provident qui tenetur magni. Laboriosam corrupti ullam molestiae, autem amet architecto deserunt! Nihil, harum accusantium.</p>
    </div>

</div>
*/


const parent = React.createElement(
    "div",
    {id: "parent"},
    [
        React.createElement(
            "div",
            {id: "child"},
            [
                React.createElement(
                    "h4",
                    {id: "head1"},
                    "Lobelia ...VS...Ouran host club"
                ),
                React.createElement(
                    "p",
                    {id: "p1"},
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit."
                ),
                React.createElement(
                    "p",
                    {id: "p2"},
                    " Atque, eum omnis! Eos laboriosam nesciunt veritatis provident qui tenetur magni."
                )
            ]
        ),
        React.createElement(
            "div",
            {id: "child1"},
            [
                React.createElement(
                    "h4",
                    {id: "head1"},
                    "Lobelia ...VS...Ouran host club"
                ),
                React.createElement(
                    "p",
                    {id: "p1"},
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit."
                ),
                React.createElement(
                    "p",
                    {id: "p2"},
                    " Atque, eum omnis! Eos laboriosam nesciunt veritatis provident qui tenetur magni."
                )
            ]
        )
    ]
);



const headin = React.createElement(
    "h3", 
     {id: "id1", xyz:"abC"},
    "Hello World VIA REACT"
    );

console.log(headin);
const root3 = ReactDOM.createRoot(document.getElementById("root3"));
root3.render(headin); // render converts the headin obj into a tag and puts it into root3 

console.log(parent);
const nest = ReactDOM.createRoot(document.getElementById("nests"));
nest.render(parent)