
import './App.css';
import {Comments, Posts, Users} from "./comps";



export const App=()=> {
return(
    <div>
        <div className={'wrap'}>
            <Users/>
            <Posts/>
        </div>
        <div>
            <Comments/>
        </div>
    </div>

)
}

export default App;
