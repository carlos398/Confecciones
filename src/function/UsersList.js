import React from "react";
import CreateUser from "./CreateUser";
import EditUser from "./EditUser";


function userList(){
    return(
        <div>
            <h2>Listar los usuarios</h2>
            <CreateUser/>
            <EditUser/>
        </div>
    );
};
export default userList;