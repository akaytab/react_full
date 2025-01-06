import { useParams } from "react-router"

function User(){
    const {userid} =useParams();
    return(
        <div>
        User : {userid}
        </div>
    )

}
export default User