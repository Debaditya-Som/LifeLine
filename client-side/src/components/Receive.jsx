import React, {useEffect, useState} from 'react'
import { listRecipients } from '../services/ReceiveService'

const Receive = () => {

  const[receive, setReceive] = useState([])

  useEffect(()=>{
    listRecipients().then((response)=>{
        setReceive(response.data);
    }).catch(error=>{
        console.error(error);
    })
  },[])
  return (
    <div className='container'>
        <h2 className='text-center'>List of receives</h2>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>receive id</th>
                    <th>receive Name</th>
                    <th>receive address</th>
                    <th>receive category</th>
                    <th>receive Type</th>
                    <th>receive pin</th>
                </tr>
            </thead>
            <tbody>
                {
                    receive.map(receive =>
                        <tr key={receive.id}>
                        <td>{receive.id}</td>
                        <td>{receive.name}</td>
                        <td>{receive.address}</td>
                        <td>{receive.category}</td>
                        <td>{receive.type}</td>
                        <td>{receive.pin}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default Receive