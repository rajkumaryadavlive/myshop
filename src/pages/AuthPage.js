import AuthForm from '../components/Auth/AuthForm';
import ErrorBoundary from '../components/errors/ErrorBoundary';

const AuthPage = () => {
  return (
          <ErrorBoundary>
                <AuthForm  />
         </ErrorBoundary> 
         );
};

export default AuthPage;
