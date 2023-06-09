import { LockActionBar } from '~/components/panel/lock-action-bar';
import { LockGrid } from '~/components/panel/lock-grid';

export const metadata = {
  title: 'Locker - Panel'
};

export default function PanelPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-screen-xl flex-col px-5 md:px-10">
      <LockActionBar />
      <div className="flex flex-col py-8">
        <LockGrid />
      </div>
    </main>
  );
}
