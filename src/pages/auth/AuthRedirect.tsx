import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

const AuthRedirect = () => {
  const navigate = useNavigate();
  const { isAuthenticated, loading } = useAuth();

  useEffect(() => {
    if (!loading) {
      if (isAuthenticated) {
        navigate('/admin/dashboard', { replace: true });
      } else {
        navigate('/auth/sign-in', { replace: true });
      }
    }
  }, [navigate, isAuthenticated, loading]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto"></div>
        <p className="mt-4 text-lg text-foreground">Redirecting...</p>
      </div>
    </div>
  );
};

export default AuthRedirect;
