
import './App.css';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import{ useState,useEffect } from 'react';
import axios from 'axios';




export default function App() {
  const [data,setdata]=useState([])

  useEffect(()=>{
    axios.get("https://northwind.vercel.app/api/suppliers")
    .then(res=>{
      setdata(res.data)
      // res.data.forEach(element => {setdata(element)

        
      // });

    })

  },[])
  




  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Contact Name</TableCell>
            <TableCell align="right">Contact Name</TableCell>
            <TableCell align="right">Country</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((suppliers) => (
            <TableRow
              key={suppliers.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              
              <TableCell align="right">{suppliers.companyName}</TableCell>
              <TableCell align="right">{suppliers.contactName}</TableCell>
              <TableCell align="right">{suppliers.address?.country}</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}