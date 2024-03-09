import InputForm from "../Elements/Input";
import Button from "../Elements/Buttons";

const FormLogin = () => {

  function handleLogin(e) {
    e.preventDefault();
    localStorage.setItem('email', e.target.email.value)
    localStorage.setItem('password', e.target.password.value)
    window.location.href = "/products"
  }


  return (
    <form onSubmit={handleLogin}>
      <InputForm label="Email" type="email" placeholder="example@mail.com" name="email" />
      <InputForm label="Password" type="password" placeholder="*****" name="password" />
      <Button classname="bg-blue-600 w-full" type="submit">Login</Button>
    </form>
  );
};

export default FormLogin