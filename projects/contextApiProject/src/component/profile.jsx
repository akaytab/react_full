import {useContext} from 'react'
import UserContext from '../context/UserContect'

function Profile(){
    const {user} = useContext (UserContext);

    if(!user){
        return(
            <div>!Error user not found</div>
        )
    }
    return (
        <div>
            user {user.name}
        </div>
    )
}

export default Profile