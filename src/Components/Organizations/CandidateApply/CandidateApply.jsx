import React, { useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchapplied, showList } from "../../../features/appliedSlice";
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
  {
    id: "candidate",
    label: "Application",
    minWidth: 100,
    align: "center",
  },
];
function CandidateApply() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchJobAvertize());
    dispatch(fetchapplied());
  }, [dispatch]);
  const { JobAvertizeList } = useSelector(showJobAvertize);
  const { applied } = useSelector(showList);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const user = JSON.parse(localStorage.getItem("Data"));
  const rows = JobAvertizeList.filter((item) => item.user._id === user._id);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const nevigate = useNavigate();
  return (
    <div className="col-10 jobadvertize">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3>Candidate Apply</h3>
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
                      .map((row, i) => {
                        return (
                          <TableRow
                            onClick={() =>
                              nevigate(
                                `/organization/candidatedetails/${row._id}`
                              )
                            }
                            hover
                            role="checkbox"
                            tabIndex={-1}
                            key={row.code}
                            style={{ corser: "pointer" }}
                          >
                            <TableCell key={i} align={"center"}>
                              {row.title}
                            </TableCell>
                            <TableCell key={i} align={"center"}>
                              {row.type}
                            </TableCell>
                            <TableCell key={i} align={"center"}>
                              {row.work}
                            </TableCell>
                            <TableCell key={i} align={"center"}>
                              {row.salary}
                            </TableCell>
                            <TableCell key={i} align={"center"}>
                              {row.skills}
                            </TableCell>
                            <TableCell key={i} align={"center"}>
                              {
                                applied.filter((item) => item.Job === row._id)
                                  .length
                              }
                            </TableCell>
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

export default CandidateApply;
