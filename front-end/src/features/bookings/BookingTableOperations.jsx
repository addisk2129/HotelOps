import Filter from '../../ui/Filter'
import SortBy from '../../ui/SortBy'
import { StyledTableOperations } from '../../ui/TableOperation'

function BookingTableOperations() {
  return (
    <StyledTableOperations>
      <Filter filterField="status"
      options={[
         {value:'all', label: "All"},
         {value:'checked-in', label: "Checked in"},
         {value:'checked-out', label: "Checked out"},
         {value:'unconfirmed', label: "Unconfirmed"},
      ]}
/>
     <SortBy
        options={[
       { value:"startDate-desc",label:"Sort by date (recent first)"},
       { value:"startDate-asc",label:"Sort by date (earlier first)"},
       { value:"totalPrice-desc",label:"Sort by amount (high first)"},
       { value:"totalPrice-asc",label:"Sort by amount (low first)"},
        ]}/>
    </StyledTableOperations>
  )
}

export default BookingTableOperations
