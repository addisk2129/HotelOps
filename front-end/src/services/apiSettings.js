
import supabase from "./supabase";

// GET - Fetch settings
export async function getSettings() {
  const { data, error } = await supabase
    .from("settings")
    .select("*")
    .single();

  if (error) {
    console.error(error);
    throw new Error("Settings could not be loaded");
  }

  return data;
}

// We expect a newSetting object that looks like {setting: newValue}
export async function updateSetting(newSetting) {
  const { data, error } = await supabase
    .from("settings")
    .update(newSetting)
    .eq("id", 1)
    .select()
    .maybeSingle();

  if (error) {
    console.error(error);
    throw new Error("Settings could not be updated");
  }
   console.log(data)
  return data;
}