import { useNavigate } from 'react-router-dom'

const Employee = ({employee, deleteEmployee}) => {

  const navigate = useNavigate();

  const editEmployee = (e, id) => {
    e.preventDefault();
    navigate(`/updateEmployee/${id}`);
  }
  return (
    <tr key={employee.id}>
      <td>{employee.firstName}</td>
      <td>{employee.lastName}</td>
      <td>{employee.emailId}</td>
      <td className='td-action'>
        <button  
          className='edit-button'
          onClick={(e, id) => editEmployee(e, employee.id)}> 
          edit
        </button>
        <button  
          className='delete-button'
          onClick={(e, id) => deleteEmployee(e, employee.id)}>
          delete
        </button>
      </td>
    </tr>
  )
}

export default Employee;