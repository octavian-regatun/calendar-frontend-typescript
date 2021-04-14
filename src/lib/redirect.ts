import router from 'next/router';

export function redirectToError(text: string): void {
  router.push(`error?text=${text}`);
}

export function redirectToLogin(): void {
  router.push('login');
}
