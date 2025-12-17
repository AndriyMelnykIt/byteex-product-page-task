import { AnnouncementBar } from "@/components/AnnouncementBar";
import { getAnnouncementBarData, getLogoData } from "@/lib/contentful";
import Image from "next/image";

export async function Header() {
    const fallbackMobile = "FREE SHIPPING on orders > $200";
    const fallbackDesktop =
        "CONSCIOUSLY MADE BUTTER SOFT STAPLES FOR EVERY DAY (OR NIGHT) | FREE SHIPPING on orders > $200 | easy 45 day return window.";

    const data = await getAnnouncementBarData();
    const logoData = await getLogoData();

    const mobileText = data?.mobileAnnouncement || fallbackMobile;
    const desktopText = data?.desktopAnnouncement || fallbackDesktop;

    let logoUrl: string | null = null;
    if (logoData?.logo?.fields?.file?.url) {
        const url = String(logoData.logo.fields.file.url);
        logoUrl = url.startsWith('//') ? `https:${url}` : url;
    }

    const hasLogo = logoUrl && logoUrl.length > 0;

    return (
        <>
            <AnnouncementBar mobileText={mobileText} desktopText={desktopText} />
            <header className="pt-4 pb-1 md:py-6 px-4">
                <div className="max-w-7xl flex justify-center md:justify-start items-center">
                    {hasLogo ? (
                        <Image
                            src={logoUrl!}
                            alt="BYTEEX Logo"
                            width={120}
                            height={40}
                            className="object-contain"
                            unoptimized
                            priority
                        />
                    ) : (
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">BYTEEX</h1>
                    )}
                </div>
            </header>
        </>
    )
}
