import { getToday } from "../utils/helpers";
import supabase from "./supabase";

export async function getBookings({filter,sortBy}) {
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
                   .single();
                   

if(error){
    console.error(error);
    throw new Error('Bookings could not be found')
}
    return data;              
}

export async function getBookingAfterDate(date) {
    
}