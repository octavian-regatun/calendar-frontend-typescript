import { useRouter } from 'next/router';

const ErrorNextPage: React.FC = () => {
  const router = useRouter();

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'darkred',
      }}
    >
      <h1>Error: {router.query.text}</h1>
    </div>
  );
};

export default ErrorNextPage;
