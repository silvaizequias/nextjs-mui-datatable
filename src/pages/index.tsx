import * as React from 'react';
import { useEffect, useState } from 'react';

import { Grid } from '@mui/material';

import useSWR from 'swr'
import IndexDataGrid from '../components/IndexTableData';

// @ts-ignore
const fetcher = (...args: any[]) => fetch(...args).then((res) => res.json())

export default function IndexPage() {

  const [data, setData] = useState([])
  const endpoint = 'https://fakestoreapi.com/users'
  const { data: users, error } = useSWR(endpoint, fetcher)

  useEffect(() => {
    const userData = async () => {
      setData(users)
    }
    userData()
  })

  return (
    <Grid>
      { <IndexDataGrid data={data} />}
    </Grid>
  );
}