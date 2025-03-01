import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function NextPage() {
  const navigate = useNavigate();
  const token = localStorage.getItem('userToken');

  useEffect(() => {
    if (!token) {
      navigate('/signup');
    }
  }, [navigate, token]);

  return (
    <div>
      <dic>Logged In</dic>
    </div>
  );
}

export default NextPage;