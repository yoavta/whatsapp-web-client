import ServiceServer from '../server-service';

function SignIn() {
    ServiceServer.print_users();
    return (
      <div className="Sign-in">
        <p>sign in page</p>
      </div>
    );
  }
  
  export default SignIn;