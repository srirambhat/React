import * as React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import { TaskTypes, hf_Data } from "./utils/hf_database";
import { rowData } from "./utils/hf_database";
import '../src/styles.css';
import AscedionImage from '../src/utils/download.jpg';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const HUGGING_FACE_API_URL = "https://huggingface.co/api/models"; // returns temp2

function createData(
  id: number,
  model_name: string,
  lastModified: string,
  likes: number,
  private_flag: number,
  downloads: number,
  pipeline_tag: string
): rowData { 
  return {
    id,
    model_name,
    lastModified,
    likes,
    private_flag,
    downloads,
    pipeline_tag,
  };
}
const arrayOfRows = [createData(1, "", "", 1, 0, 1, "")];
function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}
type Order = "asc" | "desc";
function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}
// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort<T>(
  array: readonly T[],
  comparator: (a: T, b: T) => number
) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof rowData;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: "id",
    numeric: false,
    disablePadding: true,
    label: "ID",
  },
  {
    id: "model_name",
    numeric: false,
    disablePadding: false,
    label: "Model Name",
  },
  {
    id: "lastModified",
    numeric: false,
    disablePadding: false,
    label: "lastModified",
  },
  {
    id: "likes",
    numeric: false,
    disablePadding: false,
    label: "Likes",
  },
  {
    id: "private_flag",
    numeric: false,
    disablePadding: false,
    label: "private_flag",
  },
  {
    id: "downloads",
    numeric: true,
    disablePadding: false,
    label: "Downloads",
  },
  {
    id: "pipeline_tag",
    numeric: true,
    disablePadding: false,
    label: "Pipeline_Tag",
  },
];

interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof rowData
  ) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
  loading: boolean;
}
function EnhancedTableHead(props: EnhancedTableProps) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
    loading,
  } = props;
  
  const createSortHandler =
    (property: keyof rowData) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <>
      {loading ? (
        <>
          <p>Loading...</p>
        </>
      ) : (
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox
                color="primary"
                indeterminate={numSelected > 0 && numSelected < rowCount}
                checked={rowCount > 0 && numSelected === rowCount}
                onChange={onSelectAllClick}
                inputProps={{
                  "aria-label": "select all desserts",
                }}
              />
            </TableCell>
            {headCells.map((headCell) => (
              <TableCell
                key={headCell.id}
                align={headCell.numeric ? "right" : "left"}
                padding={headCell.disablePadding ? "none" : "normal"}
                sortDirection={orderBy === headCell.id ? order : false}
              >
                <TableSortLabel
                  active={orderBy === headCell.id}
                  direction={orderBy === headCell.id ? order : "asc"}
                  onClick={createSortHandler(headCell.id)}
                >
                  {headCell.label}
                  <>
                  {console.log("Label: " +headCell.label)}
                  </>
                  {orderBy === headCell.id ? (
                    <Box component="span" sx={visuallyHidden}>
                      {order === "desc"
                        ? "sorted descending"
                        : "sorted ascending"}
                    </Box>
                  ) : null}
                </TableSortLabel>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
      )}
    </>
  );
}
interface EnhancedTableToolbarProps {
  numSelected: number;
}
function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
  const { numSelected } = props;
  
  function handleIconClick(): void {    
      // Handle the click event here
      console.log('Filter List Icon clicked');
      // You can perform your filtering logic or other actions here.
  }

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Hugging Face Models
        </Typography>
      )}
      {numSelected > 0 ? (
        <Tooltip title="Expand More">
          <IconButton>
            <ExpandMoreIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
          <FilterListIcon
              onClick={handleIconClick}
              style={{ cursor: 'pointer' }}
          />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}

export default function EnhancedTable() {
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<keyof rowData>("id");
  const [selected, setSelected] = React.useState<readonly number[]>([]);
  const [onPage, setOnPage] = React.useState(1);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [listOfModels, setListOfModels] = React.useState<hf_Data[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [downloadlimit, setDownloadLimit] = useState<number>(20000);
  const [selectedTask, setSelectedTask] = useState("all");
  //const [ visibleRows, setVisibleRows] = useState<rowData[] | null>(null);
  //https://huggingface.co/api/models?sort=downloads&direction=-1&limit=1000
  //https://huggingface.co/api/models?sort=downloads&direction=-1&limit[downloadlimit]=500
  //https://huggingface.co/api/models?sort=downloads&direction=-1&limit=500

  useEffect(() => {
    async function fetchModelList() {
      try {
        const response = await axios.get(HUGGING_FACE_API_URL, {
          params: {
            sort: "downloads",
            direction: -1,
            limit: downloadlimit,
            full: "full",
            ...((selectedTask !== "all") ? { filter: selectedTask } : {}),
          },
        });
        if (response.status === 200) {
          createRowsOfData(response.data);

        } else {
          console.error(
            `Failed to retrieve model list. Status: ${response.status}`
          );
        }
      } catch (error) {
        console.error(
          "An error occurred while fetching the model list:",
          error
        );
      } finally {
        setLoading(false);
        setOnPage(0);
      }
    }
    fetchModelList();
  }, [downloadlimit, rowsPerPage, selectedTask]);

  const labelStyle = {
    fontWeight: 'bold',
    
  };

  function createRowsOfData(mList : hf_Data[])
  {
    setListOfModels(mList);  // Store the info in the list.
    console.log("Initial Rows Length: " + arrayOfRows.length);
    popAllItemsFromArray(arrayOfRows);
    console.log("After pop() Length: " + arrayOfRows.length);
    console.log("Initial Array of Task Types: " + TaskTypes.length);
    if (mList) {
      mList.map((model, index) => {
          //console.log("Index:" + index + "  Model: " + model.pipeline_tag);
          arrayOfRows.push(
            createData(
              index, // Index Starts from 0
              model.id,
              model.lastModified,
              model.likes,
              model.private_flag,
              model.downloads,
              model.pipeline_tag
            )
          );
        
          let len;
          if ((model.pipeline_tag) ? (len = model.pipeline_tag) : (len=0))

          if ((!TaskTypes.includes(model.pipeline_tag)) && len) {
            TaskTypes.push(model.pipeline_tag);
            console.log("Task Type Add: " + model.pipeline_tag);
          }

        });
        console.log(
          "Final number of Rows(Length):" + arrayOfRows.length
        );
      } else {
        console.log("ModelList Empty");
      }

      
  }

  function handleDisplayToggle()
  {
    let newPage = 0;
    
    console.log("Before Page Setting: " +onPage);

    // Toggle the page for display purposes
    newPage = (onPage) ? 0 : 1;
    setOnPage(newPage); // if it is on 0, then set it to 1
    console.log("setting new page: "+newPage);
  }

  function handleChangeSetTaskType(event: React.ChangeEvent<HTMLSelectElement>) 
  {
    console.log("Handle Changes Set Task type: "+event.target.value);
    setSelectedTask(event.target.value);
    handleDisplayToggle();
    setLoading(true);
  }

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof rowData
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = arrayOfRows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, id: number) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: readonly number[] = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setOnPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setOnPage(0);
  };

  const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDense(event.target.checked);
  };

  const isSelected = (id: number) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    onPage > 0 ? Math.max(0, (1 + onPage) * rowsPerPage - arrayOfRows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(arrayOfRows, getComparator(order, orderBy)).slice(
        onPage * rowsPerPage,
        onPage * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, onPage, rowsPerPage]
  );

  /* 
  useEffect(() => {
    setVisibleRows(stableSort(arrayOfRows, getComparator(order, orderBy)).slice(
      onPage * rowsPerPage,
      onPage * rowsPerPage + rowsPerPage
    ));

    console.log("visibleRows(len): " + visibleRows?.length);

  }, [ order, orderBy, onPage, rowsPerPage])
  */

  function popAllItemsFromArray(arr: any[]): void {
    while (arr.length > 0) {
      arr.pop();
    }
  }

  return (
    <>
      <body className="my-group">
      <img src={AscedionImage} alt="Ascendion"/>
      <br/><br/>
      <label className="my-label" htmlFor="downloadLimitSelect" style={labelStyle}>Select a Number to download:</label>
      <span>
        <div>
          <select className="my-select"
            id="downloadLimitSelect"
            style={{marginRight: '20px'}}
            onChange={(e) => {
              setDownloadLimit(parseInt(e.target.value));
              setLoading(true);
            }}
          >
            <option value={100}>100</option>
            <option value={500}>500</option>
            <option value={1000}>1000</option>
            <option value={5000}>5000</option>
            <option value={10000}>10000</option>
            <option value={20000}>20000</option>
          </select>
          <select className="my-select" style={{marginRight: '20px'}} value={selectedTask} onChange={handleChangeSetTaskType}>
                  {TaskTypes.map((item) => (
                      <option key={item} value={item}>
                            {item}
                        </option>
                  ))}
          </select>
          <FormControlLabel
                control={<Switch checked={dense} onChange={handleChangeDense} />}
                label="Dense padding"
              />
              </div>
        </span>
      {loading ? (
        <>
        <p className="blink_text">Loading...</p>
        {console.log("Loading...." +loading)}
        </>
      ) : (
        <>
          <Box sx={{ width: "100%" }}>
            <Paper sx={{ width: "100%", mb: 2 }}>
              <EnhancedTableToolbar numSelected={selected.length} />
              <TableContainer>
                <Table
                  sx={{ minWidth: 750 }}
                  aria-labelledby="tableTitle"
                  size={dense ? "small" : "medium"}
                >
                  <EnhancedTableHead
                    numSelected={selected.length}
                    order={order}
                    orderBy={orderBy}
                    onSelectAllClick={handleSelectAllClick}
                    onRequestSort={handleRequestSort}
                    rowCount={arrayOfRows.length}
                    loading={loading}
                  />
                  <TableBody>
                  <>
                  {console.log("In Here arrayofRows(Len): " +arrayOfRows.length +" orderBy: " +orderBy +" order:" +order + " Rows/Page: " +rowsPerPage + " onPage: " +onPage)}
                  </>
                    {visibleRows.map((row, index) => {
                      <>
                      {console.log("Index: " +index +" row: " +row)}
                      </>        
                      const isItemSelected = isSelected(row.id);
                      const labelId = `enhanced-table-checkbox-${index}`;
                      return (
                        <TableRow
                          hover
                          onClick={(event) => handleClick(event, row.id)}
                          role="checkbox"
                          aria-checked={isItemSelected}
                          tabIndex={-1}
                          key={row.id}
                          selected={isItemSelected}
                          sx={{ cursor: "pointer" }}
                        >
                          <TableCell padding="checkbox">
                            <Checkbox
                              color="primary"
                              checked={isItemSelected}
                              inputProps={{
                                "aria-labelledby": labelId,
                              }}
                            />
                          </TableCell>
                          <TableCell
                            component="th"
                            id={labelId}
                            scope="row"
                            padding="none"
                          >
                            {row.id}
                          </TableCell>
                          <TableCell align="left">{row.model_name}</TableCell>
                          <TableCell align="left">{row.lastModified}</TableCell>
                          <TableCell align="left">{row.likes}</TableCell>
                          <TableCell align="left">{row.private_flag ? "true" : "false"}</TableCell>
                          <TableCell align="right">{row.downloads}</TableCell>
                          <TableCell align="right">{row.pipeline_tag}</TableCell>
                        </TableRow>
                      );
                    })}
                    {emptyRows > 0 && (
                      <TableRow
                        style={{
                          height: (dense ? 33 : 53) * emptyRows,
                        }}
                      >
                        <TableCell colSpan={6} />
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={arrayOfRows.length}
                rowsPerPage={rowsPerPage}
                page={onPage}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Paper>
          </Box>
        </>
      )}
      </body>
    </>
  );
}
