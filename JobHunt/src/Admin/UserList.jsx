export function UserList(){
    var status = "Pending";

    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col">
                    <table className="table">
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Contact</th>
                            <th>Address</th>
                            <th>Status </th>
                            <th>Action</th>
                        </tr>
                        <tr>
                            <td>Sage Satsavia</td>
                            <td>ss@hotmail.com</td>
                            <td>+1(123)123-1234 </td>
                            <td> 123 so n so street</td>
                            <td>{status}</td>
                            <td>
                                {status=="Pending" ? (
                                    <>
                                    <button className="btm btn-danger">APPROVE</button>
                                    <button className="btm btn-success">REJECT</button>
                                    <button className="btm btn-danger">APPROVE</button>
                                    <button className="btm btn-success">CANCEL</button>
                                    <button className="btm btn-success">COMPLETE</button>
                                    </>
                                ): status=="Approve" ? (
                                    <>
                                    <button className="btm btn-success">REJECT</button>
                                    </>
                                ): status=="Reject" ? (
                                    <>
                                    <button className="btm btn-danger">APPROVE</button>
                                    </>
                                ): status=="Complete" ? (
                                    <>
                                    <button className="btm btn-success">CANCEL</button>
                                    </>
                                ): (
                                    <>
                                    <button className="btm btn-success">COMPLETE</button>
                                    </>
                                )
                            }
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        </>
    )
}