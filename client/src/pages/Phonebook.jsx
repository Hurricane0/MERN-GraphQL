import React, { useEffect, useState, useLayoutEffect } from "react";
import { Typography, makeStyles } from "@material-ui/core";
import MaterialTable from "material-table";
import { useQuery, gql, useMutation } from "@apollo/client";

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
      id
      name
      number
      description
    }
  }
`;

const ADD_PHONE = gql`
  mutation addPhone($name: String!, $number: String!, $description: String) {
    addPhone(name: $name, number: $number, description: $description) {
      id
      name
      number
      description
    }
  }
`;

const DELETE_PHONE = gql`
  mutation deletePhone($id: ID) {
    deletePhone(id: $id) {
      id
      name
      number
      description
    }
  }
`;

const Phonebook = () => {
  const classes = useStyles();

  const { loading, data, refetch, networkStatus } = useQuery(GET_PHONES, {
    notifyOnNetworkStatusChange: true,
  });
  const [addPhone] = useMutation(ADD_PHONE);
  const [deletePhone] = useMutation(DELETE_PHONE);
  const [state, setState] = React.useState([]);
  const [mobileWidth, setMobileWidth] = useState(false);

  useLayoutEffect(() => {
    window.addEventListener("resize", reportWindowSize);
    reportWindowSize();
    return () => window.removeEventListener("resize", reportWindowSize);
  }, []);

  const reportWindowSize = () => {
    console.log(document.documentElement.clientWidth);
    if (document.documentElement.clientWidth <= 445) {
      setMobileWidth(true);
    } else {
      setMobileWidth(false);
    }
  };

  const handleAddPhone = (name, number, description) => {
    addPhone({
      variables: {
        name,
        number,
        description,
      },
      notifyOnNetworkStatusChange: true,
    });
    refetch();
  };

  const handleDeletePhone = (id) => {
    deletePhone({ variables: { id: id } });
    refetch();
  };

  useEffect(() => {
    if (data) {
      setState(data.phones);
    }
  }, [data, networkStatus]);

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
        isLoading={loading || networkStatus === 4}
        title="List of mobile phones"
        columns={columns}
        data={editable.reverse()}
        options={options}
        editable={
          !mobileWidth && {
            onRowAdd: (newData) =>
              new Promise((resolve) => {
                resolve();
                handleAddPhone(
                  newData.name,
                  newData.number,
                  newData.description
                );
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
                resolve();
                handleDeletePhone(oldData.id);
              }),
          }
        }
      />
    </div>
  );
};

export default Phonebook;
