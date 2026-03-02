import styled from "styled-components";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import DashboardBox from "./DashboardBox";
import Heading from "../../ui/Heading";
import { useDarkMode } from "../../context/DarkModeContext";
import { eachDayOfInterval, format, isSameDay, subDays } from "date-fns";

const StyledSalesChart = styled(DashboardBox)`
  grid-column: 1 / -1;
  padding: 2rem 3rem 3rem 3rem;

  /* Hack to change grid line colors */
  & .recharts-cartesian-grid-horizontal line,
  & .recharts-cartesian-grid-vertical line {
    stroke: var(--color-grey-300);
  }
`;

function SalesChart({ bookings, numDays }) {
  const { isDarkMode } = useDarkMode();

  const allDates = eachDayOfInterval({
    start: subDays(new Date(), numDays - 1),
    end: new Date(),
  });

  const data = allDates.map((date) => {
    return {
      label: format(date, "MMM dd"),
      totalSales: bookings
        ?.filter((booking) => isSameDay(date, new Date(booking.created_at)))
        .reduce((acc, cur) => acc + cur.totalPrice, 0),
      extraSales: bookings
        ?.filter((booking) => isSameDay(date, new Date(booking.created_at)))
        .reduce((acc, cur) => acc + cur.extrasPrice, 0),
    };
  });


  const colors = isDarkMode
    ? {
        totalSales: { stroke: "#818cf8", fill: "#4f46e5" },
        extraSales: { stroke: "#4ade80", fill: "#22c55e" },
        text: "#e5e7eb",
        background: "#18212f",
      }
    : {
        totalSales: { stroke: "#4f46e5", fill: "#c7d2fe" },
        extraSales: { stroke: "#16a34a", fill: "#dcfce7" },
        text: "#374151",
        background: "#fff",
      };

  return (
    <StyledSalesChart>
      <Heading as="h2">
        Sales from {format(allDates[0], "MMM dd")} to{" "}
        {format(allDates[allDates.length - 1], "MMM dd")}
      </Heading>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={data} 
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <XAxis
            dataKey="label"
            tick={{ fill: colors.text }}
            tickLine={{ stroke: colors.text }}
          />
          <YAxis
            unit="$"
            tick={{ fill: colors.text }}
            tickLine={{ stroke: colors.text }}
          />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip
            contentStyle={{ backgroundColor: colors.background }}
            itemStyle={{ color: colors.text }}
          />
          <Area
            type="monotone"
            dataKey="totalSales"
            stackId="1"
            stroke={colors.totalSales.stroke}
            fill={colors.totalSales.fill}
            fillOpacity={0.6}
            strokeWidth={2}
            name="Total Sales"
            unit="$"
          />
          <Area
            type="monotone"
            dataKey="extraSales"
            stackId="1"
            stroke={colors.extraSales.stroke}  
            fill={colors.extraSales.fill}      
            fillOpacity={0.4}
            strokeWidth={2}
            name="Extra Sales"
            unit="$"
          />
        </AreaChart>
      </ResponsiveContainer>
    </StyledSalesChart>
  );
}

export default SalesChart;