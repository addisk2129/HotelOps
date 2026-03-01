import styled from "styled-components";
import { format, isToday } from "date-fns";
import {
  HiOutlineChatBubbleBottomCenterText,
  HiOutlineCheckCircle,
  HiOutlineCurrencyDollar,
  HiOutlineHomeModern,
} from "react-icons/hi2";

import DataItem from "../../ui/DataItem";
import { formatCurrency, formatDistanceFromNow } from "../../utils/helpers";
import Flag from "../../ui/Flag";

const StyledBookingDataBox = styled.section`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  overflow: hidden;
  margin: 2.4rem 0;
`;

const Header = styled.header`
  background-color: var(--color-brand-500);
  padding: 1.6rem 3.2rem;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & h2 {
    margin: 0;
    font-size: 1.8rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }

  & p {
    font-size: 1.4rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }
`;

const Section = styled.section`
  padding: 2.4rem 3.2rem;
`;

const Guest = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-bottom: 1.6rem;

  & img {
    border-radius: 100%;
    object-fit: cover;
    width: 5rem;
    height: 5rem;
  }
  
  & h3 {
    font-size: 1.8rem;
    font-weight: 600;
  }
`;

const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.6rem;
  margin-top: 2.4rem;
  padding: 1.6rem 2.4rem;
  background-color: ${(props) =>
    props.isPaid ? "var(--color-green-100)" : "var(--color-yellow-100)"};
  color: ${(props) =>
    props.isPaid ? "var(--color-green-700)" : "var(--color-yellow-700)"};
  border-radius: var(--border-radius-md);

  & p {
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }

  & span {
    font-size: 1.8rem;
    font-weight: 700;
  }
`;

const Footer = styled.footer`
  padding: 1.6rem 3.2rem;
  background-color: var(--color-grey-50);
  border-top: 1px solid var(--color-grey-100);

  & p {
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 0.8rem;
    color: var(--color-grey-500);
  }
`;

function BookingDataBox({ booking }) {
  const {
    created_at,
    startDate,
    endDate,
    numNights,
    numGuests,
    cabinPrice,
    extrasPrice,
    totalPrice,
    hasBreakfast,
    observations,
    isPaid,
    guests: { fullName: guestName, email, nationality, countryFlag, nationalID } = {},
    cabins: { name: cabinName } = {}
  } = booking || {};

  const status = isPaid ? "paid" : "unpaid";

  return (
    <StyledBookingDataBox>
      <Header>
        <h2>
          <HiOutlineHomeModern />
          {numNights} nights in {cabinName || "Cabin"}
        </h2>
        <p>
          <HiOutlineChatBubbleBottomCenterText />
          
          {format(new Date(created_at), "EEE, MMM dd yyyy")} (
          {isToday(new Date(created_at))
            ? "Today"
            : formatDistanceFromNow(created_at)}
          )
        </p>
      </Header>

      <Section>
        <Guest>
          {countryFlag && <Flag src={countryFlag} alt={`Flag of ${nationality}`} />}
          <div>
            <h3>{guestName}</h3>
            <p>{email} • {nationality} • {nationalID}</p>
          </div>
        </Guest>

        <DataItem icon={<HiOutlineCheckCircle />} label="Check in">
          {format(new Date(startDate), "EEE, MMM dd yyyy")}
          {isToday(new Date(startDate)) && " (Today)"}
        </DataItem>

        <DataItem icon={<HiOutlineCheckCircle />} label="Check out">
          {format(new Date(endDate), "EEE, MMM dd yyyy")}
          {numNights > 0 && ` • ${numNights} night stay`}
        </DataItem>

        {hasBreakfast && (
          <DataItem icon={<HiOutlineCurrencyDollar />} label="Breakfast price">
            {formatCurrency(extrasPrice)} ({numGuests} guests @ {formatCurrency(15)}/night)
          </DataItem>
        )}

        {observations && (
          <DataItem icon={<HiOutlineChatBubbleBottomCenterText />} label="Observations">
            {observations}
          </DataItem>
        )}

        <Price isPaid={isPaid}>
          <p>
            <HiOutlineCurrencyDollar />
            Total price
          </p>
          <div>
            <span>{formatCurrency(totalPrice)}</span>
            {hasBreakfast && (
              <p style={{ fontSize: "1.2rem" }}>
                ({formatCurrency(cabinPrice)} cabin + {formatCurrency(extrasPrice)} breakfast)
              </p>
            )}
          </div>
          <p>{status === "paid" ? "Paid" : "Will pay at check-in"}</p>
        </Price>
      </Section>

      <Footer>
        <p>
          <HiOutlineChatBubbleBottomCenterText />
          Booking made {format(new Date(created_at), "EEE, MMM dd yyyy, p")}
        </p>
      </Footer>
    </StyledBookingDataBox>
  );
}

export default BookingDataBox;