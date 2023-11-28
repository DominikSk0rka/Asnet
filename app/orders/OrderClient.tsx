"use client";

import { User, Order } from "@prisma/client";
import { DataGrid, GridColDef } from "@mui/x-data-grid"
import { formatPrice } from "@/utils/formatPrice";
import Heading from "@/app/components/Heading";
import Status from "@/app/components/Status";
import { MdAccessTimeFilled, MdDeliveryDining, MdDone, MdRemoveRedEye } from "react-icons/md";
import ActionBtn from "@/app/components/ActionBtn";
import { useRouter } from "next/navigation";
import moment from "moment";


interface OrdersClientProps{
    orders: ExtendedOrder[];
}

type ExtendedOrder = Order & {
    user: User;
}

const OrdersClient: React.FC<OrdersClientProps> = ({ orders }) => {
    const router = useRouter();
    let rows: any = [];



    if(orders){
        rows = orders.map((order)=>{
            return{
            id: order.id,
            customer: order.user.name,
            amount: formatPrice(order.amount / 100),
            paymentStatus: order.status,
            date: moment(order.createDate).fromNow(),
            deliveryStatus: order.deliveryStatus,
            };
        });
    }




//-------------------------------------------------Kolumny---------------------------------------------------------------
    const columns: GridColDef[] = [
        {field: "id", headerName: "ID", width: 220},
        {field: "customer", headerName: "Klient", width: 130},


        {
         field: "amount",
         headerName: "Kwota", 
         width: 130, 
         renderCell: (params) => {
            return(
            <div className="font-bold text-slate-800">{params.row.amount}</div>
            );
        },
    },
    

    {
        field: "paymentStatus", 
        headerName: "Status płatności", 
        width: 130, 
        renderCell: (params) => {
        return(
        <div>
            {params.row.paymentStatus === "pending" ? ( 
        <Status 
            text="pending"
            icon={MdAccessTimeFilled}
            bg="bg-slate-200"
            color="text-slate-700"
            />
            ) : params.row.paymentStatus === "complite" ?  (
                <Status 
            text="completed"
            icon={MdDone}
            bg="bg-green-200"
            color="text-green-700"
            /> 
            ) :  (<></>
            )}
            </div>
       );
    }, 
},


    {
        field: "deliveryStatus", 
        headerName: "Status przesyłki", 
        width: 130, 
        renderCell: (params) => {
        return(
         <div>
            {params.row.deliveryStatus === 'pending' ? ( 
        <Status 
            text="pending"
            icon={MdAccessTimeFilled}
            bg="bg-slate-200"
            color="text-slate-700"
            />
            ) : params.row.deliveryStatus === 'dispatched' ?  (
                <Status 
            text="dispatched"
            icon={MdDeliveryDining}
            bg="bg-purple-200"
            color="text-purple-700"
            /> 
            ) :  params.row.deliveryStatus === 'delivered' ? (
                <Status 
            text="delivered"
            icon={MdDone}
            bg="bg-green-200"
            color="text-green-700"
            /> 
            ): (<></>
            )}
            </div>

       );
    }, 
},

    {
        field: "date",
        headerName: "Czas utworzenia",
        width: 130,
    },

    {field: "action", headerName: "Akcje", width: 200, renderCell: (params) => {
        return(
        <div className="flex justify-between gap-4 w-full">
            <ActionBtn icon={MdRemoveRedEye} onClick={() => {
                router.push(`/order/${params.row.id}`);
            }}/>
            </div>
        );
    }, 
},
];



 
//---------------------------------------------------------------------------------------



    return ( 
    <div className="max-w-[1150px] m-auto text-xl">
        <div className="mb-4 mt-8">
            <Heading title="Zarządzaj Zamówieniami" center/>
        </div>


        <div style={{height: 600, width: "100%"}}>
            <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[10, 20]}
        checkboxSelection
        disableRowSelectionOnClick
      />
      </div>
     </div> );
}
 
export default OrdersClient;