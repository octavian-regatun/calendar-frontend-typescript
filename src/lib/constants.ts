export const PRIVACY_POLICY_URI = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
export const TERMS_OF_SERVICE_URI =
  'https://www.youtube.com/watch?v=dQw4w9WgXcQ';

export const BACKEND_URI = process.env.NEXT_PUBLIC_BACKEND_URI as string;
export const GOOGLE_CLIENT_ID = process.env
  .NEXT_PUBLIC_GOOGLE_CLIENT_ID as string;

if (!BACKEND_URI) throw new Error('BACKEND_URI env is undefined');
if (!GOOGLE_CLIENT_ID) throw new Error('GOOGLE_CLIENT_ID env is undefined');
