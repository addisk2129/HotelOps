import { getToday } from "../utils/helpers";
import { PAGE_SIZE } from "../utils/constant";
import supabase from "./supabase";
import { isToday } from "date-fns";  
export async function getBookings({filter,sortBy,page}) {
         let query=supabase
                     .from("bookings")
                      .select(`id,created_at,startDate
                        ,endDate,numNights, 
                        numGuests,status,totalPrice, 
                        cabins(name),
                        guests(fullName,email)`
                        ,{count:"exact"});

    //FILTER    
    if(filter) 
        query=query[filter.method|| "eq"](filter.field,filter.value)    // .eq(filter.field,filter.value)      
    
    //SORT
    if(sortBy)
        query=query.order(sortBy.field,
    {ascending:sortBy.direction==="asc"})    

    if(page){
        const from=(page-1) * PAGE_SIZE - 1
        const to=from+PAGE_SIZE - 1
        query=query.range(from,to)
    }
    const {data,error,count}=await query;
  
if(error){
    console.error(error);
    throw new Error('Bookings could not be loaded')
    }
    return {data,count};            

}

export async function getBooking(id) {
   const {data,error}=await supabase
                   .from('bookings')
                   .select("*, cabins(*),guests(*)")
                   .eq("id",id)
                   .maybeSingle();
                   

if(error){
    console.error(error);
    throw new Error('Bookings could not be found')
}
    return data;              
}

export async function updateBooking(id,obj){
const {data, error} = await supabase
                     .from("bookings")
                     .update(obj)
                     .eq("id", id)
                     .select()
                     .single()
        if(error){
        console.error(error);
        throw new Error('Bookings could not be updated')
    }
        return data;               
}


export async function deleteBooking(id) {
 const { data, error } = await supabase
                     .from("bookings")
                     .delete()
                     .eq("id", id)
                     .select()
                     .maybeSingle(); 
        if(error){
        console.error(error);
        throw new Error('Booking could not be deleted')
    }
        return data; 
}

// Returns all BOOKINGS that were created after the given date.
// Useful to get bookings created in the last 30 days, for example.

export async function getBookingsAfterDate(date) {
    const { data, error } = await supabase
        .from("bookings")
        .select("created_at, totalPrice, extrasPrice")
        .gte("created_at", date)
        .lte("created_at", getToday({ end: true }));

    if (error) {
        console.error(error);
        throw new Error("Bookings could not get loaded");
    }
  
    return data;
}
// Returns all STAYS that were created after the given date

export async function getStaysAfterDate(date) {
    const { data, error } = await supabase
        .from("bookings")
        .select("*, guests(fullName)")
        .gte("startDate", date)
        .lte("startDate", getToday());

    if (error) {
        console.error(error);
        throw new Error("Bookings could not get loaded");
    }
 
   
    return data;
}





// ... rest of your code

export async function getStaysTodayActivity() {
  const { data, error } = await supabase
    .from("bookings")
    .select("*, guests(fullName, nationality, countryFlag)")
    .order("created_at");

  if (error) {
    console.error(error);
    throw new Error("Today's activities could not be loaded");
  }

  // Filter activities that happen today
  const todayActivities = data?.filter((booking) => {
    return (
      (booking.status === "unconfirmed" && isToday(new Date(booking.startDate))) ||
      (booking.status === "checked-in" && isToday(new Date(booking.endDate)))
    );
  });

  return todayActivities;
}