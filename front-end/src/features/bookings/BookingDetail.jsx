import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { HiArrowLeft } from "react-icons/hi2";

import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag";
import ButtonText from "../../ui/ButtonText";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import Spinner from "../../ui/Spinner";
import BookingDataBox from "./BookingDataBox";

import { useBooking } from "./useBooking";
import { useMoveBack } from "../../hooks/useMoveBack";
import { useCheckout } from "../check-in-out/useCheckinOut";
import { IoEnterOutline } from "react-icons/io5";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Modal from "../../ui/Modal";
import { useDeleteBooking } from "./useDeleteBooking";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function BookingDetail() {
  const { bookingId } = useParams();
  const { booking, isLoading } = useBooking();
  const {checkout,isCheckingOut}=useCheckout();
  const{deleteBooking,isDeleting}=useDeleteBooking();
  const moveBack = useMoveBack();
  const navigate=useNavigate()
  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver"
  };

  if (isLoading) return <Spinner />;
  if (!booking) return <p>Booking not found</p>;

  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h1">Booking #{bookingId}</Heading>
          <Tag type={statusToTagName[booking?.status]}>
            {booking.status.replace("-", " ")}
          </Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>
          <HiArrowLeft /> Back
        </ButtonText>
      </Row>

       <BookingDataBox booking={booking} /> 

      <ButtonGroup>
           {booking?.status === "unconfirmed" &&
            (<Button icon={<HiArrowLeft/>}
               onClick={()=>navigate(`/checkin/${bookingId}`)}>
                Check in
               </Button>)
                 }

               { booking?.status === "checked-in" 
              && (<Button icon={<IoEnterOutline />}
                  onClick={()=>checkout(bookingId)}
                  disabled={isCheckingOut}>
                    Check out
                  </Button>)
                }  
    <Modal>
         <Modal.Open opens='delete'>
          <Button variation='danger'>
            Delete booking
          </Button>
         </Modal.Open>
        <Modal.Window name='delete'>
        <ConfirmDelete resourceName='booking'
          disabled={isDeleting}
         onConfirm={()=>deleteBooking(bookingId,{
          onSettled:()=>navigate(-1)
         })}/>
      </Modal.Window>
    </Modal>

      

        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>


        
      </ButtonGroup>
    </>
  );
}

export default BookingDetail;