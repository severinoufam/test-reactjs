// src/components/DataTable.js
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination, Paper } from '@mui/material';

const DataTable = () => {
  const rows = [
    { project: 'TestTestTest', id: 1, status: 'Open', title:  'Item com um nome muito longo que ultrapassa o limite da coluna Item com um nome muito longo que ultrapassa o limite da coluna', link: 'http://localhost:3000/http://localhost:3000/http://localhost:3000/http://localhost:3000/http://localhost:3000/', severity: 'A', date_open: '01/01/2021', date_m_o: '01/2021', date_close: '01/01/2024', date_close_mc: '01/2025', author: 'test'},
    { project: 'TestTestTest', id: 2, status: 'Open', title:  'Item com um nome muito longo que ultrapassa o limite da coluna Item com um nome muito longo que ultrapassa o limite da coluna', link: 'http://localhost:3000/http://localhost:3000/http://localhost:3000/http://localhost:3000/http://localhost:3000/', severity: 'A', date_open: '01/01/2021', date_m_o: '01/2021', date_close: '01/01/2024', date_close_mc: '01/2025', author: 'test'},
    { project: 'TestTestTest', id: 3, status: 'Open', title:  'Item com um nome muito longo que ultrapassa o limite da coluna Item com um nome muito longo que ultrapassa o limite da coluna', link: 'http://localhost:3000/http://localhost:3000/http://localhost:3000/http://localhost:3000/http://localhost:3000/', severity: 'A', date_open: '01/01/2021', date_m_o: '01/2021', date_close: '01/01/2024', date_close_mc: '01/2025', author: 'test'},
    { project: 'TestTestTest', id: 4, status: 'Open', title:  'Item com um nome muito longo que ultrapassa o limite da coluna Item com um nome muito longo que ultrapassa o limite da coluna', link: 'http://localhost:3000/http://localhost:3000/http://localhost:3000/http://localhost:3000/http://localhost:3000/', severity: 'A', date_open: '01/01/2021', date_m_o: '01/2021', date_close: '01/01/2024', date_close_mc: '01/2025', author: 'test'},
    { project: 'TestTestTest', id: 5, status: 'Open', title:  'Item com um nome muito longo que ultrapassa o limite da coluna Item com um nome muito longo que ultrapassa o limite da coluna', link: 'http://localhost:3000/http://localhost:3000/http://localhost:3000/http://localhost:3000/http://localhost:3000/', severity: 'A', date_open: '01/01/2021', date_m_o: '01/2021', date_close: '01/01/2024', date_close_mc: '01/2025', author: 'test'},
    { project: 'TestTestTest', id: 6, status: 'Open', title:  'Item com um nome muito longo que ultrapassa o limite da coluna Item com um nome muito longo que ultrapassa o limite da coluna', link: 'http://localhost:3000/http://localhost:3000/http://localhost:3000/http://localhost:3000/http://localhost:3000/', severity: 'A', date_open: '01/01/2021', date_m_o: '01/2021', date_close: '01/01/2024', date_close_mc: '01/2025', author: 'test'},
    { project: 'TestTestTest', id: 7, status: 'Open', title:  'Item com um nome muito longo que ultrapassa o limite da coluna Item com um nome muito longo que ultrapassa o limite da coluna', link: 'http://localhost:3000/http://localhost:3000/http://localhost:3000/http://localhost:3000/http://localhost:3000/', severity: 'A', date_open: '01/01/2021', date_m_o: '01/2021', date_close: '01/01/2024', date_close_mc: '01/2025', author: 'test'},
    { project: 'TestTestTest', id: 8, status: 'Open', title:  'Item com um nome muito longo que ultrapassa o limite da coluna Item com um nome muito longo que ultrapassa o limite da coluna', link: 'http://localhost:3000/http://localhost:3000/http://localhost:3000/http://localhost:3000/http://localhost:3000/', severity: 'A', date_open: '01/01/2021', date_m_o: '01/2021', date_close: '01/01/2024', date_close_mc: '01/2025', author: 'test'},
    { project: 'TestTestTest', id: 9, status: 'Open', title:  'Item com um nome muito longo que ultrapassa o limite da coluna Item com um nome muito longo que ultrapassa o limite da coluna', link: 'http://localhost:3000/http://localhost:3000/http://localhost:3000/http://localhost:3000/http://localhost:3000/', severity: 'A', date_open: '01/01/2021', date_m_o: '01/2021', date_close: '01/01/2024', date_close_mc: '01/2025', author: 'test'},
    { project: 'TestTestTest', id: 10, status: 'Open', title:  'Item com um nome muito longo que ultrapassa o limite da coluna Item com um nome muito longo que ultrapassa o limite da coluna', link: 'http://localhost:3000/http://localhost:3000/http://localhost:3000/http://localhost:3000/http://localhost:3000/', severity: 'A', date_open: '01/01/2021', date_m_o: '01/2021', date_close: '01/01/2024', date_close_mc: '01/2025', author: 'test'},
  ];

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    const newRowsPerPage = parseInt(event.target.value, 10);
    setRowsPerPage(newRowsPerPage);
    setPage(0); // Redefine a página para 0 ao mudar a quantidade de linhas por página
  };

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <Paper className="table-scroll-container">
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className="sticky-header">Test</TableCell>
              <TableCell className="sticky-header">Test</TableCell>
              <TableCell className="sticky-header">Test</TableCell>
              <TableCell className="sticky-header">Test</TableCell>
              <TableCell className="sticky-header">Test</TableCell>
              <TableCell className="sticky-header">Test</TableCell>
              <TableCell className="sticky-header">Test</TableCell>
              <TableCell className="sticky-header">Test</TableCell>
              <TableCell className="sticky-header">Test</TableCell>
              <TableCell className="sticky-header">Test</TableCell>
              <TableCell className="sticky-header">Test</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <TableRow key={row.id}>
                <TableCell className="name-cell">{row.project}</TableCell>
                <TableCell className="name-cell">{row.id}</TableCell>
                <TableCell className="name-cell">{row.status}</TableCell>
                <TableCell className="name-cell">{row.title}</TableCell>
                <TableCell className="name-cell">{row.link}</TableCell>
                <TableCell className="name-cell">{row.severity}</TableCell>
                <TableCell className="name-cell">{row.date_open}</TableCell>
                <TableCell className="name-cell">{row.date_m_o}</TableCell>
                <TableCell className="name-cell">{row.date_close}</TableCell>
                <TableCell className="name-cell">{row.date_close_mc}</TableCell>
                <TableCell className="name-cell">{row.author}</TableCell>
              </TableRow>
            ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={3} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        className="table-pagination"
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default DataTable;
