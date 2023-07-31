import React from 'react'
import "./style.css"
const DashboardTable = ({ dataArray }) => {
  return (
    <div className='dashboard-table'>
        <div className='table'>
      <table>
        <thead>
          <tr>
            <th>S No.</th>
            <th>Customer Name</th>
            <th>Contact</th>
            <th>Email Id</th>
            <th>Date</th>
            <th>Time Slot</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {dataArray.map((entry) => (
            <tr key={entry.sNo}>
              <td>{entry.sNo}</td>
              <td>{entry.customerName}</td>
              <td>{entry.contact}</td>
              <td>{entry.emailId}</td>
              <td>{entry.date}</td>
              <td>{entry.timeSlot}</td>
              <td>{entry.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default DashboardTable