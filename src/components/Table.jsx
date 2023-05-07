import { useEffect } from "react";
import $ from "jquery";
import DataTable from "datatables.net-dt";

// Import necessary styles
import "datatables.net-dt/css/jquery.dataTables.min.css";

const Table = (props) => {
  

  useEffect(() => {
    const temp = props.data
    console.log(props.data)
    $("#myTable").DataTable({
      data: temp,
      columns: [
        { title: "Name" , data : 'name' },
        { title: "Age", data : 'age'},
        { title: "Sex", data : 'gender' },
        { title: "Address" , data : 'address'},
        { title: "Country" , data : 'country'},
        { title: "ID Type" , data : 'govtid'},
        { title: "Govt ID", data : 'govtidnumber' },
        { title: "Gaurdian" , data : 'gaurdianname'},
        { title: "Nationality" , data : 'nationality'},
      ],
    });
  });

  // Create a reference for the table
  return <table id="myTable">  </table>;
};

export default Table;
