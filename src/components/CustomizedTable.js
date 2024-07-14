import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#5B7E83",
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));



export default function CustomizedTables({tableHeading,tableRow}) {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                    {Object.keys(tableHeading).map((index)=>{
                        const heading = tableHeading[index]
                            return <StyledTableCell>{heading}</StyledTableCell>
                    })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Object.keys(tableRow).map((index) => {
                        const row = tableRow[index]
                        return(
                        <StyledTableRow key={row.sharingType}>
                            <StyledTableCell component="th" scope="row">
                                {row.sharingType}
                            </StyledTableCell>
                            <StyledTableCell >{row.price}</StyledTableCell>

                        </StyledTableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
