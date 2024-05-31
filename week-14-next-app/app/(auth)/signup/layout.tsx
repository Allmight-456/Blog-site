//you can also create a layout.tsx for this folder specifically
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <div>
        <div className="border-b p-2 text-center">
          This is only for next 3 days
        </div>
        {children}
      </div>
    );
  }