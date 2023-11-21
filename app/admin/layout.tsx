import AdminNav from "../components/admin/AdminNav";

export const metadata = {
    title: "Sklep Admin",
    description: "Sklep Admin Panl Główny",
}


const AdminLayout = ({children}: {children: React.ReactNode}) => {
    return ( 
     <div>
       <AdminNav/>
            {children}
    </div> );
}
 
export default AdminLayout;