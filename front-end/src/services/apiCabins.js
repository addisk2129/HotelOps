import supabase, { supabaseUrl } from "./supabase"

export const getCabins=async()=>{
    let { data, error } = await supabase
  .from('cabins')
  .select('*')

  if(error){
    console.error(error);
    throw new Error('Cabins could not be loaded')
  }
   return data;
}

export const createCabin=async(newCabin)=> {
  const imageName=`${Math.random()}-${newCabin.image.name}`.replace("/","")
  const imagePath=`${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`

  //1. create cabin
  const { data, error } = await supabase
    .from('cabins')
    .insert([{...newCabin,image:imagePath}])
    .select()

    if(error){
      console.error(error);
      throw new Error('Cabins could not be created')
    }

    //2. Upload Image
   
      const { data, error:storageError } = await supabase.storage.
      from('cabin-images').upload(imageName, newCabin.image)
     
      //3 Delete the cabin If there an error uploading image

      if (storageError) {
        await supabase.from('cabins').delete().eq('id', data.id)
        console.error(storageError);
      throw new Error('Cabins image could not be uploaded and could not be created')
      } 
     return data;
  
}

export async function deleteCabins(id) {
  
  const {data, error } = await supabase
    .from('cabins')
    .delete()
    .eq('id', id)
   

    if(error){
      console.error(error);
      throw new Error('Cabins could not be deleted')
    }

    return data;
}
