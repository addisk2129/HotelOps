import Row from '../ui/Row'
import Heading from '../ui/Heading'
import DashBoardLayout from '../features/dashboard/DashBoardLayout'
import DashboardFilter from '../features/dashboard/DashBoardFilter'
function Dashboard() {
  return (
    <>
    <Row type="horizontal">
      <Heading as='h1'>Dashboard</Heading> 
      <DashboardFilter/>
    </Row>
     <DashBoardLayout/>
    </>  
  )
}

export default Dashboard
