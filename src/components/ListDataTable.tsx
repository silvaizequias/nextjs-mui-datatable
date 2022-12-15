import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

import useSWR from 'swr'
import { useEffect, useState } from 'react';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
        field: 'fullName',
        headerName: 'Full Name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params: GridValueGetterParams) =>
            `${params.row.name.firstname || ''} ${params.row.name.lastname || ''}`,
    },
    { field: 'email', headerName: 'E-mail', width: 180 },
    { field: 'username', headerName: 'Username', width: 180 },
    { field: 'password', headerName: 'Password', width: 180 },
];


// @ts-ignore
const fetcher = (...args: any[]) => fetch(...args).then((res) => res.json())

export default function ListDataTable() {
    const endpoint = 'https://fakestoreapi.com/users'
    const { data: users, error } = useSWR(endpoint, fetcher)

    const [rows, setRows] = useState([])

    useEffect(() => {
        const userData = async () => {
            setRows(users)
        }
        if (users?.length >= 1)
            userData()
    })
    console.log("rows", users)

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                getRowId={(row) => row.id}
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    );
}