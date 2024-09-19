import React, { useEffect } from "react";
import "./JobAdvertize.css";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchJobAvertize,
  showJobAvertize,
} from "../../../features/JobAdvertize";
const columns = [
  { id: "title", label: "Title", minWidth: 100, align: "center" },
  {
    id: "type",
    label: "Job Type",
    minWidth: 100,
    align: "center",
  },
  {
    id: "work",
    label: "Work Type",
    minWidth: 100,
    align: "center",
  },
  {
    id: "salary",
    label: "Salary",
    minWidth: 100,
    align: "center",
  },
  {
    id: "skills",
    label: "Skills",
    minWidth: 100,
    align: "center",
  },
  { id: "description", label: "Description", minWidth: 100, align: "center" },
];
function JobAdvertize() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchJobAvertize());
  }, [dispatch]);
  const { JobAvertizeList } = useSelector(showJobAvertize);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const user = JSON.parse(localStorage.getItem("Data"));
  console.log(JobAvertizeList)
  const rows = JobAvertizeList.filter((item) => item.user._id === user._id);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  // console.log(JobAvertizeList);
  return (
    <div className="col-10 jobadvertize">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3>Advertize a Job</h3>
          </div>
          <div className="col-12 py-2 d-flex justify-content-end">
            <Link to="/organization/addjob">
              {" "}
              <Button variant="contained" sx={{ backgroundColor: "#F66B0E" }}>
                Advertize a Job
              </Button>
            </Link>
          </div>
          <div className="col-12">
            <Paper sx={{ width: "100%", overflow: "hidden" }}>
              <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead sx={{ color: "#112B3C" }}>
                    <TableRow>
                      {columns.map((column) => (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          style={{ minWidth: column.minWidth }}
                        >
                          {column.label}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((row) => {
                        return (
                          <TableRow
                            hover
                            role="checkbox"
                            tabIndex={-1}
                            key={row.code}
                          >
                            {columns.map((column) => {
                              const value = row[column.id];
                              return (
                                <TableCell key={column.id} align={column.align}>
                                  {column.format && typeof value === "number"
                                    ? column.format(value)
                                    : value}
                                </TableCell>
                              );
                            })}
                          </TableRow>
                        );
                      })}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Paper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobAdvertize;
