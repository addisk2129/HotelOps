import styled from "styled-components";
import { useRecentBookings } from "./useRecentBookings";
import { useRecentStays } from "./useRecentStays";
import Spinner from '../../ui/Spinner'
const StyledDashBoardLayout=styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto 34rem auto;
    gap: 2.4rem;
`

function DashBoardLayout() {
  const {bookings,isLoading} = useRecentBookings();
  const {stays,isLoading:isLoading1,confirmedStays} =useRecentStays()
  if(isLoading) return <Spinner/>

   
  return (
    <StyledDashBoardLayout>
        
    </StyledDashBoardLayout>
  )
}

export default DashBoardLayout
