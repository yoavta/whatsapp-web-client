import ServiceServer from '../server-service';
import Users from './assets/hard-coded-users.json';

function SignIn() {
    ServiceServer.print_users();
    return (
      <div className="Sign-in">
        <p>sign in page</p>
        <p>Users.nickname</p>
      </div>
    );
  }
  
  export default SignIn;