import BootstrapTable from "react-bootstrap-table-next";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { Container } from "react-bootstrap";

function Employee() {
  // this.state = { employeeList: employeeList };
  //this.handleChange = this.handleChange.bind(this);

  /*var handleChange = function () {
    this.setState({ products: newProducts });
  };
*/
  let styles = {
    margin: "0 5px",
  };
  let employeeList = [
    {
      id: 0,
      firstName: "Asma",
      lastName: "Lassoued",
      age: 15,
    },
  ];

  let Add = function () {
    debugger;
    employeeList.push({
      firstName: "Asma",
      lastName: "Lassoued",
      age: 15,
    });
  };

  const columns = [
    {
      dataField: "firstName",
      text: "First Name",
    },
    {
      dataField: "lastName",
      text: "Last Name",
    },
    {
      dataField: "age",
      text: "Age",
    },
  ];

  return (
    <Container>
      <Navbar className="bg-light justify-content-between">
        <Form inline>
          <InputGroup style={styles}>
            <InputGroup.Prepend>
              <InputGroup.Text id="firstName"></InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="First Name"
              aria-label="FirstName"
              aria-describedby="firstName"
            />
          </InputGroup>
          <InputGroup style={styles}>
            <InputGroup.Prepend>
              <InputGroup.Text id="lastName"></InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Last Name"
              aria-label="LastName"
              aria-describedby="lastName"
            />
          </InputGroup>

          <InputGroup style={styles}>
            <InputGroup.Prepend>
              <InputGroup.Text id="age"></InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Age"
              aria-label="Age"
              aria-describedby="age"
            />
          </InputGroup>
        </Form>
        <Form inline>
          <Button onClick={Add}>Add</Button>
        </Form>
      </Navbar>

      <BootstrapTable
        onChange={(e) => {
          this.handleChange();
        }}
        keyField="id"
        data={employeeList}
        columns={columns}
      />
    </Container>
  );
}

export default Employee;
