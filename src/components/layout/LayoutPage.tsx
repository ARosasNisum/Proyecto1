import {Outlet} from "react-router-dom";

const LayoutPage = () => {
    return (
        <div id={"page"} className={"page"}>
            <header id={"header"} className={"header"}>
                <h1><a href="">CustomLoginPage with Spring-Security and JSF</a></h1>
            </header>
            <section id={"container"} className={"container"}>
                <section id={"content"} className={"content"}>
                    <Outlet/>
                </section>
            </section>
            <footer id={"footer"} className={"footer"}></footer>
        </div>
    );
}

export default LayoutPage;