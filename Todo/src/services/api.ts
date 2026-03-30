const BASE = "http://localhost:3001";

export const getTodos = async () => {
  const res = await fetch(`${BASE}/todos`);
  return res.json();
};

export const addTodo = async (title: string) => {
  await fetch(`${BASE}/todos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title }),
  });
};