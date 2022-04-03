import {Form} from "react-bootstrap";

function Search(props){
    return(
<Form>
  <Form.Group className="mb-3" controlId="searchFilter">
        <Form.Control value={ props.searchFilter} onChange={(event)=>props.setSearchFilter(event.target.value)} type="text" placeholder="Enter Name" />
  </Form.Group>


</Form>
    )



}

export default Search;