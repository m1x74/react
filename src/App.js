
import './App.css';
import {Comments, Posts, Users} from "./comps";



export const App=()=> {
return(
    <div>
        <div className={'wrap'}>
            <Users/>
            <Posts/>
        </div>
        <div className={'coms'}>
            <Comments/>
        </div>
    </div>

)
}

export default App;
