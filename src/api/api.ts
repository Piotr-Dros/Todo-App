const baseUrl = 'http://localhost:3000';

export async function getTodos(): Promise<Todo[]> {
  const req = new Request(`${baseUrl}/todos`, {
    method: 'GET',
  });

  return fetch(req).then((res) => {
    if (!res.ok) throw new Error('Network error');

    return res.json();
  });
}

export async function postTodo(
  state: TodoState,
  content: string
): Promise<Todo> {
  const req = new Request(`${baseUrl}/todos`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ state, content }),
  });

  return fetch(req).then((res) => {
    if (!res.ok) throw new Error('Network error');
    return res.json();
  });
}

export async function deleteTodo(id: number): Promise<void> {
  const req = new Request(`${baseUrl}/todos/${id}`, {
    method: 'DELETE',
  });

  await fetch(req).then((res) => {
    if (!res.ok) throw new Error('Network error');
  });
}

export async function putTodo(
  id: number,
  TodoInfo: Omit<Todo, 'id'>
): Promise<Todo> {
  const req = new Request(`${baseUrl}/todos/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(TodoInfo),
  });

  return fetch(req).then((res) => {
    if (!res.ok) throw new Error('Network error');
    return res.json();
  });
}
