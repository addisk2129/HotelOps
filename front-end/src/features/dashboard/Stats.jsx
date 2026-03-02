import styled from "styled-components";
import Stat from "./Stat";
import { 
  HiOutlineCalendar,
  HiOutlineCurrencyDollar,
  HiOutlineCheckCircle,
  HiOutlineHomeModern
} from "react-icons/hi2";

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.6rem;
  grid-column: 1 / -1;
`;

function Stats({ bookings, confirmedStays, numDays, cabinCount }) {
  const totalSales = bookings?.reduce((acc, cur) => acc + cur.totalPrice, 0) || 0;
  const checkIns = confirmedStays?.length || 0;
  const occupancyRate = cabinCount 
    ? Math.round((checkIns / (numDays * cabinCount)) * 100) 
    : 0;

  return (
    <StatsGrid>
      <Stat 
        title="Bookings" 
        color="blue" 
        icon={<HiOutlineCalendar />} 
        value={bookings?.length || 0}
      />
      <Stat 
        title="Sales" 
        color="green" 
        icon={<HiOutlineCurrencyDollar />} 
        value={`$${totalSales.toLocaleString()}`}
      />
      <Stat 
        title="Check ins" 
        color="indigo" 
        icon={<HiOutlineCheckCircle />} 
        value={checkIns}
      />
      <Stat 
        title="Occupancy rate" 
        color="yellow" 
        icon={<HiOutlineHomeModern />} 
        value={`${occupancyRate}%`}
      />
    </StatsGrid>
  );
}

export default Stats;