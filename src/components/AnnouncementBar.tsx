interface AnnouncementBarProps {
    mobileText: string;
    desktopText: string;
}

export function AnnouncementBar({ mobileText, desktopText }: AnnouncementBarProps) {
    return (
        <div className="bg-[#F9F0E5] border-b border-black/5 py-2.5 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-xs md:text-sm text-gray-500 text-center">
                    <span className="md:hidden">
                        {mobileText}
                    </span>
                    <span className="hidden md:block">
                        {desktopText}
                    </span>
                </div>
            </div>
        </div>
    )
}
