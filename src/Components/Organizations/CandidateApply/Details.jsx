import React, { useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobAvertize } from "../../../features/JobAdvertize";
import { fetchapplied, showList } from "../../../features/appliedSlice";
const columns = [
  { id: "user.username", label: "Name", minWidth: 100, align: "center" },
  {
    id: "user.type",
    label: "Job Type",
    minWidth: 100,
    align: "center",
  },
  {
    id: "user.email",
    label: "Email",
    minWidth: 100,
    align: "center",
  },
  {
    id: "score",
    label: "Score",
    minWidth: 100,
    align: "center",
  },
];
function CandidateDetails() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchJobAvertize());
    dispatch(fetchapplied());
  }, [dispatch]);
  const { applied } = useSelector(showList);
  const { id } = useParams();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const rows = applied.filter((item) => item.Job === id);
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
            <h3>Candidate Details</h3>
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
                            key={row._id}
                            onClick={() =>
                              nevigate(`/organization/cv/${row.user._id}`, {
                                state: { id: row.resume._id },
                              })
                            }
                          >
                            <TableCell align={"center"}>
                              {row.user.username}
                            </TableCell>
                            <TableCell align={"center"}>
                              {row.resume.job}
                            </TableCell>
                            <TableCell align={"center"}>
                              {row.user.email}
                            </TableCell>
                            <TableCell align={"center"}>{row.score}</TableCell>
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

export default CandidateDetails;
