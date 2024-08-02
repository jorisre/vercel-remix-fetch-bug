import { Form, redirect } from '@remix-run/react';

export function action() {
  return redirect('/');
}

export default function Login() {
  return (
    <Form method="post" className="p-10">
      <button type="submit" className="border border-black p-3">
        Login & Redirect
      </button>
    </Form>
  );
}
