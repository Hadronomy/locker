'use client';

import { type VariantProps, cva } from 'class-variance-authority';
import { type HTMLAttributes } from 'react';
import { UserButton } from '@clerk/nextjs/app-beta';
import { useAuth } from '@clerk/nextjs';
import Link from 'next/link';

import { buttonVariants } from './Button';
import { cn } from '~/lib/utils';

export const navbarLoginStyle = cva('flex');

export type NavbarLoginProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof navbarLoginStyle>;

export function NavbarLogin({ className, ...props }: NavbarLoginProps) {
  const { isSignedIn } = useAuth();

  return (
    <div className={cn(navbarLoginStyle({ className }))} {...props}>
      <div className="flex items-center gap-x-4">
        <UserButton afterSignOutUrl="/" />
        <Link
          className={cn(
            buttonVariants({ variant: 'default' }),
            'w-28 font-bold'
          )}
          href={!isSignedIn ? '/signin' : '/panel'}
        >
          {!isSignedIn && 'Login'}
          {!!isSignedIn && 'Panel'}
        </Link>
      </div>
    </div>
  );
}
