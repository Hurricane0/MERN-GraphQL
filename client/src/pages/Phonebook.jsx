import React, { useEffect } from "react";
import { Typography, makeStyles } from "@material-ui/core";
import MaterialTable from "material-table";
import { useQuery, gql } from "@apollo/client";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTypography-h3": {
      fontWeight: "100",
    },
    "& .MuiTableSortLabel-root:hover": {
      color: "#fff",
    },
    "& .MuiTableSortLabel-root.MuiTableSortLabel-active": {
      color: "#fff",
    },
    "& .MuiTableSortLabel-root.MuiTableSortLabel-active.MuiTableSortLabel-root.MuiTableSortLabel-active .MuiTableSortLabel-icon": {
      color: "#fff",
    },
    "& .MuiTableSortLabel-root:focus": {
      color: "#fff",
    },
  },
}));

const GET_PHONES = gql`
  {
    phones {
      name
      number
      description
    }
  }
`;
const Phonebook = () => {
  const classes = useStyles();

  const { loading, data } = useQuery(GET_PHONES);
  const [state, setState] = React.useState([]);

  useEffect(() => {
    if (data) {
      setState(data.phones);
    }
  }, [data]);

  const columns = [
    { title: "Name", field: "name" },
    { title: "Number", field: "number" },
    { title: "Description", field: "description" },
  ];

  const options = {
    headerStyle: {
      backgroundColor: "#212121",
      color: "#b9b9b9",
    },
  };

  const editable = state.map((phone) => ({ ...phone }));
  return (
    <div className={classes.root}>
      <Typography align="center" variant="h3" gutterBottom>
        Phonebook
      </Typography>

      <MaterialTable
        isLoading={loading}
        title="List of mobile phones"
        columns={columns}
        data={editable}
        options={options}
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                setState((prevState) => {
                  const data = [...prevState.data];
                  data.push(newData);
                  return { ...prevState, data };
                });
              }, 600);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                if (oldData) {
                  setState((prevState) => {
                    const data = [...prevState.data];
                    data[data.indexOf(oldData)] = newData;
                    return { ...prevState, data };
                  });
                }
              }, 600);
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                setState((prevState) => {
                  const data = [...prevState.data];
                  data.splice(data.indexOf(oldData), 1);
                  return { ...prevState, data };
                });
              }, 600);
            }),
        }}
      />
    </div>
  );
};

export default Phonebook;
