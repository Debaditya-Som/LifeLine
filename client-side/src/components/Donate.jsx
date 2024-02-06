import React, {useEffect, useState} from 'react'
import { listDonors } from '../services/DonorService'

const Donate = () => {

  const[donors, setDonors] = useState([])

  useEffect(()=>{
    listDonors().then((response)=>{
        setDonors(response.data);
    }).catch(error=>{
        console.error(error);
    })
  },[])
  return (
    <div className='container'>
        <h2 className='text-center'>List of Donors</h2>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Donor id</th>
                    <th>Donor Name</th>
                    <th>Donor address</th>
                    <th>Donor category</th>
                    <th>Donor Type</th>
                    <th>Donor pin</th>
                </tr>
            </thead>
            <tbody>
                {
                    donors.map(donor =>
                        <tr key={donor.id}>
                        <td>{donor.id}</td>
                        <td>{donor.name}</td>
                        <td>{donor.address}</td>
                        <td>{donor.category}</td>
                        <td>{donor.type}</td>
                        <td>{donor.pin}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default Donate