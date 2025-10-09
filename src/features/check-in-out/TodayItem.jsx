import styled from "styled-components";
import { Link } from "react-router-dom";

import Tag from "../../ui/Tag";
import { Flag } from "../../ui/Flag";
import Button from "../../ui/Button";
import CheckoutButton from "./CheckoutButton";

const StyledTodayItem = styled.li`
  display: grid;
  grid-template-columns: 9rem 3rem 1fr 8rem 10rem;
  gap: 1.2rem;
  align-items: center;

  font-size: 1.4rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid var(--color-grey-100);

  &:first-child {
    border-top: 1px solid var(--color-grey-100);
  }
`;

const GuestInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-weight: 500;
`;

const Nights = styled.div`
  text-align: center;
  font-weight: 500;
`;

function TodayItem({ activity }) {
  const { id, status, guests, numNights } = activity;

  const isArriving = status === "unconfirmed";
  const isDeparting = status === "checked-in";

  return (
    <StyledTodayItem>
      {isArriving && <Tag type="green">Arriving</Tag>}
      {isDeparting && <Tag type="blue">Departing</Tag>}

      <Flag src={guests.countryFlag} alt={`Flag of ${guests.country}`} />

      <GuestInfo>{guests.fullName}</GuestInfo>

      <Nights>{numNights} nights</Nights>

      {isArriving && (
        <Button
          as={Link}
          to={`/checkin/${id}`}
          size="small"
          variation="primary"
        >
          Check in
        </Button>
      )}
      {isDeparting && <CheckoutButton bookingId={id} />}
    </StyledTodayItem>
  );
}

export default TodayItem;
