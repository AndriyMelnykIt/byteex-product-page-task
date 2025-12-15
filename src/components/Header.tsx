import AnnouncementBar from './AnnouncementBar';

export default function Header() {
  return (
    <header className="bg-white sticky top-0 z-50">
      <AnnouncementBar />
      <div>
        <div style={{ paddingLeft: '100px', paddingRight: '100px' }}>
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="text-3xl font-black text-black tracking-tight">
              BYTEEX
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

