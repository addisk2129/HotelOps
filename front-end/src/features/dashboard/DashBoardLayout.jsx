import styled from "styled-components";
import { useRecentBookings } from "./useRecentBookings";
import { useRecentStays } from "./useRecentStays";
import { useCabins } from '../cabins/useCabins';
import SalesChart from '../dashboard/SalesChart';
import Spinner from '../../ui/Spinner';
import Stats from "./Stats";
import DurationChart from "./DurationChart";
import TodayActivity from "../check-in-out/TodayActivity";
import { useTodayActivity } from "../check-in-out/useTodayActivity";

const StyledDashBoardLayout = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto 34rem auto;
    gap: 2.4rem;
`;
const Wide = styled.div`
  grid-column: span 2;
`;

function DashBoardLayout() {
  const { bookings, isLoading } = useRecentBookings();
  const { stays, isLoading: isLoading1, confirmedStays, numDays } = useRecentStays();
  const { cabins, isLoading: isLoading3 } = useCabins();
  const { activities, isLoading2 } = useTodayActivity();

  if (isLoading || isLoading2 || isLoading1 || isLoading3) return <Spinner />;
 
  return (
    <StyledDashBoardLayout>
      <Stats 
        bookings={bookings} 
        confirmedStays={confirmedStays}
        numDays={numDays}
        cabinCount={cabins?.length}
      />
      <TodayActivity activities={activities} />
      <Wide>
      <DurationChart confirmedStays={confirmedStays} />
    </Wide>

      <SalesChart bookings={bookings} numDays={numDays}/>
    </StyledDashBoardLayout>
  );
}

export default DashBoardLayout;