import { AnnouncementBar } from "@/components/AnnouncementBar";
import { getAnnouncementBarData } from "@/lib/contentful";

export async function Header() {
    const fallbackMobile = "FREE SHIPPING on orders > $200";
    const fallbackDesktop =
        "CONSCIOUSLY MADE BUTTER SOFT STAPLES FOR EVERY DAY (OR NIGHT) | FREE SHIPPING on orders > $200 | easy 45 day return window.";

    const data = await getAnnouncementBarData();

    const mobileText = data?.mobileAnnouncement || fallbackMobile;
    const desktopText = data?.desktopAnnouncement || fallbackDesktop;

    return (
        <>
            <AnnouncementBar mobileText={mobileText} desktopText={desktopText} />
            <header className="py-1 md:py-6 px-4">
                <div className="max-w-7xl flex justify-center md:justify-start">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900">BYTEEX</h1>
                </div>
            </header>
        </>
    )
}
