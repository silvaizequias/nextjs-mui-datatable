import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

//@ts-ignore
const IndexDataGrid = ({ data }) => {


    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'email', headerName: 'E-mail', width: 130 },
        { field: 'phone', headerName: 'Phone', width: 130 },
        { field: 'username', headerName: 'UserName', width: 130 },
        { field: 'password', headerName: 'password', width: 130 }
    ]

    const rows = [{data}]

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="center">E-mail</TableCell>
                        <TableCell align="center">Phone</TableCell>
                        <TableCell align="center">UserName</TableCell>
                        <TableCell align="center">Password</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data?.map((item: any) => (
                        <TableRow
                            key={item?.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {item?.id}
                            </TableCell>
                            <TableCell align="center">{item?.email}</TableCell>
                            <TableCell align="center">{item?.phone}</TableCell>
                            <TableCell align="center">{item.username}</TableCell>
                            <TableCell align="center">{item?.password}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

    );
}

export default IndexDataGrid