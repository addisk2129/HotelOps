import styled from "styled-components";
import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import TodayItem from "./TodayItem";
import { useTodayActivity } from "./useTodayActivity";
import Spinner from "../../ui/Spinner";

const StyledToday = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 3.2rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding-top: 2.4rem;
  height: 100%;  // Make it fill the grid cell
`;

const TodayList = styled.ul`
  overflow: auto;
  flex: 1;  // Take remaining space
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  
  /* Removing scrollbars */
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
`;

const NoActivity = styled.p`
  text-align: center;
  font-size: 1.4rem;
  font-weight: 500;
  color: var(--color-grey-500);
  padding: 2.4rem;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function TodayActivity() {  
  const { stays, isLoading } = useTodayActivity();

  return (
    <StyledToday>
      <Row type="horizontal">
        <Heading as="h2">Today's activity</Heading>
      </Row>

      {isLoading ? (
        <Spinner />
      ) : stays?.length > 0 ? (
        <TodayList>
          {stays.map((activity) => (
            <TodayItem activity={activity} key={activity.id} />
          ))}
        </TodayList>
      ) : (
        <NoActivity>No activity today...</NoActivity>
      )}
    </StyledToday>
  );
}

export default TodayActivity;