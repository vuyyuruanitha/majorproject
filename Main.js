import Mainpage from "./Mainpage";
import Sidebar from "./Sidebar";
function Main(){
    return (
        <div className="main">
            <Sidebar />
            <Mainpage />
        </div>
    );
}

export default Main;