'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

const publicPaths = [
  '/',
  '/auth/login',
  '/auth/register',
  '/products',
  '/products/[id]'
];

export default function AuthMiddleware({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!loading) {
      const isPublicPath = publicPaths.some(path => 
        path.includes('[') 
          ? pathname?.startsWith(path.split('[')[0])
          : pathname === path
      );

      if (!user && !isPublicPath) {
        router.push('/auth/login');
      }
    }
  }, [user, loading, pathname, router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return <>{children}</>;
}