import { Outlet } from "react-router-dom";
import { AdminHeader } from "./AdminHeader";
import { AdminFooter } from "./AdminFooter";

export function AdminMaster(){
    return(
        <>
          <AdminHeader/>
          <Outlet/>
          <AdminFooter/>
        </>
      
    )
}