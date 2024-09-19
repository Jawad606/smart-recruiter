import React, { useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchResume, showResume } from "../../../features/resumeSlice";
const columns = [
  { id: "job", label: "Job", minWidth: 100, align: "center" },
  {
    id: "introduction",
    label: "Overview",
    minWidth: 100,
    align: "center",
  },
  {
    id: "skills",
    label: "Skills",
    minWidth: 100,
    align: "center",
  },
];
function CandidateJobInfo() {
  const nevigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchResume());
  }, [dispatch]);
  const { resumeList } = useSelector(showResume);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const user = JSON.parse(localStorage.getItem("Data"));

  const rows = resumeList.filter((item) => item.user._id === user._id);
  const length = rows.length;
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <div className="jobadvertize mt-5">
      <div className="container">
        <div className="row ">
          <div className="col-12">
            <h3 className="text-center">Resume Details</h3>
          </div>
          <div className="col-12 py-2 d-flex justify-content-end">
            <Button
              variant="contained"
              sx={{ backgroundColor: "#F66B0E" }}
              disabled={length > 3 ? true : false}
              onClick={() => nevigate("/candidate")}
            >
              Add Resume
            </Button>
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

export default CandidateJobInfo;
