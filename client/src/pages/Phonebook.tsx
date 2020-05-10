import React, { useEffect, useState, useLayoutEffect } from "react";
import { Typography, makeStyles } from "@material-ui/core";
import MaterialTable from "material-table";
import { useQuery, gql, useMutation } from "@apollo/client";
import { IPhones } from "../interfaces";

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

const UPDATE_PHONE = gql`
  mutation updatePhone(
    $id: ID
    $name: String!
    $number: String!
    $description: String
  ) {
    updatePhone(
      id: $id
      name: $name
      number: $number
      description: $description
    ) {
      id
      name
      number
      description
    }
  }
`;

const Phonebook: React.FC = () => {
  const classes = useStyles();

  const { loading, data, refetch, networkStatus } = useQuery(GET_PHONES, {
    notifyOnNetworkStatusChange: true,
  });
  const [addPhone] = useMutation(ADD_PHONE);
  const [deletePhone] = useMutation(DELETE_PHONE);
  const [updatePhone] = useMutation(UPDATE_PHONE);
  const [phones, setPhones] = React.useState<IPhones[]>([]);
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
    }).then(() => refetch());
  };

  const handleDeletePhone = (id) => {
    deletePhone({ variables: { id } });
    refetch();
  };

  const handleUpdatePhone = (id, name, number, description) => {
    updatePhone({ variables: { id, name, number, description } });
    refetch();
  };

  useEffect(() => {
    if (data) {
      setPhones(data.phones);
    }
  }, [data, networkStatus]);

  const columns = [
    { title: "Name", field: "name" },
    { title: "Number", field: "number", initialEditValue: "+380" },
    {
      title: "Description",
      field: "description",
    },
  ];

  const options = {
    headerStyle: {
      backgroundColor: "#212121",
      color: "#b9b9b9",
    },
    addRowPosition: "first",
  };

  const editable = phones.map((phone) => ({ ...phone }));
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
            onRowUpdate: ({ id, name, number, description }, oldData) =>
              new Promise((resolve) => {
                resolve();
                if (oldData) {
                  handleUpdatePhone(id, name, number, description);
                }
              }),
            onRowDelete: ({ id }) =>
              new Promise((resolve) => {
                resolve();
                handleDeletePhone(id);
              }),
          }
        }
      />
    </div>
  );
};

export default Phonebook;
