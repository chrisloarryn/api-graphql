import ErrorMessage from '@/error-handling/error-message';

function NotFound404Page() {
  return <ErrorMessage statusCode={404} message="Page Not Found" />;
}

export default NotFound404Page;
