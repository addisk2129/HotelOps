import { useState } from "react";
import { isFuture, isPast, isToday } from "date-fns";
import supabase from "../services/supabase";
import Button from "../ui/Button";
import { subtractDates } from "../utils/helpers";

import { bookings } from "./data-bookings";
import { cabins } from "./data-cabins";
import { guests } from "./data-guests";

// const originalsSettings = {
//    minBookingLength: 3,
//    maxBookingLength: 30,
//    maxGuestsPerBooking: 10,
//    breakfastPrice: 15,
// };

async function deleteGuests() {
    const { error } = await supabase.from("guests").delete().gt("id", 0);
    if (error) console.log(error.message);
}

async function deleteCabins() {
    const { error } = await supabase.from("cabins").delete().gt("id", 0);
    if (error) console.log(error.message);
}

async function deleteBookings() {
    const { error } = await supabase.from("bookings").delete().gt("id", 0);
    if (error) console.log(error.message);
}

async function createCabins() {
    const { error } = await supabase.from("cabins").insert(cabins);
    if (error) console.log(error.message);
}

async function createGuests() {
    const { error } = await supabase.from("guests").insert(guests);
    if (error) console.log(error.message);
}

async function createBookings() {
    // Bookings need to reference actual cabin and guest IDs
    const { data: cabinsData } = await supabase
        .from("cabins")
        .select("id");
    
    const { data: guestsData } = await supabase
        .from("guests")
        .select("id");

    if (!cabinsData || !guestsData) return;

    // Create a map of cabin names to IDs
    const cabinIdMap = cabinsData.reduce((map, cabin, index) => {
        map[cabins[index]?.name] = cabin.id;
        return map;
    }, {});

    // Create a map of guest emails to IDs
    const guestIdMap = guestsData.reduce((map, guest, index) => {
        map[guests[index]?.email] = guest.id;
        return map;
    }, {});

    // Prepare bookings with correct IDs
    const preparedBookings = bookings.map(booking => ({
        ...booking,
        cabinId: cabinIdMap[booking.cabinId],
        guestId: guestIdMap[booking.guestId],
        created_at: new Date().toISOString(),
    }));

    const { error } = await supabase.from("bookings").insert(preparedBookings);
    if (error) console.log(error.message);
}

function Uploader() {
    const [isLoading, setIsLoading] = useState(false);

    async function uploadAll() {
        setIsLoading(true);
        
        try {
            // First verify the column names
            const { data: columns } = await supabase
                .from('bookings')
                .select('*')
                .limit(1);
            
            if (columns && columns[0]) {
                console.log('Booking columns:', Object.keys(columns[0]));
            }
    
            // Delete in correct order
            await deleteBookings();
            await deleteGuests();
            await deleteCabins();
    
            // Create in correct order
            await createCabins();
            await createGuests();
            await createBookings();
    
            
        } catch (error) {
            console.error('Upload failed:', error);
           
        } finally {
            setIsLoading(false);
        }
    }

    async function uploadBookingsOnly() {
        setIsLoading(true);
        await deleteBookings();
        await createBookings();
        setIsLoading(false);
    }

    async function uploadCabinsOnly() {
        setIsLoading(true);
        await deleteCabins();
        await createCabins();
        setIsLoading(false);
    }

    async function uploadGuestsOnly() {
        setIsLoading(true);
        await deleteGuests();
        await createGuests();
        setIsLoading(false);
    }

    return (
        <div
            style={{
                backgroundColor: "var(--color-grey-800)",
                padding: "1.2rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.8rem",
                borderRadius: "0 0 0 8px",
                zIndex: 1000,
                boxShadow: "var(--shadow-lg)",
            }}
        >
            <Button
                onClick={uploadAll}
                disabled={isLoading}
                size="small"
                variation="primary"
            >
                Upload ALL
            </Button>

            <Button
                onClick={uploadCabinsOnly}
                disabled={isLoading}
                size="small"
                variation="secondary"
            >
                Upload Cabins Only
            </Button>

            <Button
                onClick={uploadGuestsOnly}
                disabled={isLoading}
                size="small"
                variation="secondary"
            >
                Upload Guests Only
            </Button>

            <Button
                onClick={uploadBookingsOnly}
                disabled={isLoading}
                size="small"
                variation="secondary"
            >
                Upload Bookings Only
            </Button>
        </div>
    );
}

export default Uploader;