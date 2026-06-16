const supabase = require("../config/supabase");

const createTask = async (taskData) => {
  const { data, error } = await supabase
    .from("tasks")
    .insert(taskData)
    .select()
    .single();
  if (error) throw error;
  return data;
};

const getTasksByUserId = async (userId) => {
  const { data, error } = await supabase
    .from("tasks")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", {
      ascending: false,
    });
  if (error) throw error;
  return data;
};

const getTaskById = async (taskId) => {
  const { data, error } = await supabase
    .from("tasks")
    .select("*")
    .eq("id", taskId)
    .maybeSingle();
  if (error) throw error;
  return data;
};

const updateTaskById = async (taskId, updateData) => {
  const { data, error } = await supabase
    .from("tasks")
    .update(updateData)
    .eq("id", taskId)
    .select()
    .single();
  if (error) throw error;
  return data;
};

const deleteTaskById = async (taskId) => {
  const { error } = await supabase.from("tasks").delete().eq("id", taskId);
  if (error) throw error;
};

module.exports = {
  createTask,
  getTasksByUserId,
  getTaskById,
  updateTaskById,
  deleteTaskById,
};
