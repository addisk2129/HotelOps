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



export const createEditCabin = async (newCabin, id) => {

  const hasImagepath =
    newCabin?.image?.startsWith?.(supabaseUrl);// in case of edit image url is exit so that is why i use this trick


  const imageName =
    `${Math.random()}-${newCabin?.image?.name}`.replace("/", "");

  const imagePath = hasImagepath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public
    /cabin-images/${imageName}`;

  let query;

  // CREATE
  if (!id) {
    query = supabase
      .from("cabins")
      .insert([{ ...newCabin, image: imagePath }])
      .select()
      .maybeSingle();
  }
  //REMEMBER ID IS FOR EDITING CABIN
  // EDIT
  if (id) {
    query = supabase
      .from("cabins")
      .update({ ...newCabin, image: imagePath })
      .eq("id", id)
      .select()
      .maybeSingle();
  }

  const { data, error } = await query;

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be created or edited");
  }

  // upload image ONLY if new image
  if (!hasImagepath) {
    const { error: storageError } = await supabase.storage
      .from("cabin-images")
      .upload(imageName, newCabin.image);

    if (storageError) {
      await supabase.from("cabins").delete().eq("id", data.id);
      throw new Error("Image upload failed");
    }
  }

  return data;
};


export async function deleteCabins(id) {
  const { data, error } = await supabase
    .from("cabins")
    .delete()
    .eq("id", id)
    .select()
    .maybeSingle();   

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be deleted");
  }

  return data;
}
