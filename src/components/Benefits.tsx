import { Button } from "@/components/ui/Button"
import Image from "next/image"

interface ComfortSectionProps {
  comfortMadeEasy?: string;
  youSave?: string;
  weShip?: string;
  youEnjoy?: string;
  browseOur?: string;
  weShipYour?: string;
  wearHernest?: string;
  customizeYourOutfit?: string;
}

export function ComfortSection({
  comfortMadeEasy,
  youSave,
  weShip,
  youEnjoy,
  browseOur,
  weShipYour,
  wearHernest,
  customizeYourOutfit
}: ComfortSectionProps) {
  return (
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8">

            <h2 className="font-['Sofia_Pro'] font-normal text-[32px] leading-[40px]  font-regular tracking-[0.04em] text-[#01005B] text-center">
              {comfortMadeEasy || 'Comfort made easy'}
            </h2>

            <div className="grid gap-6 md:grid-cols-3 justify-items-center max-w-[1100px] mx-auto">

              <div className="bg-[#F0EEEF] rounded-[8px] w-full max-w-[346px] h-[321px] p-8 flex flex-col items-center justify-center space-y-4">
                <div className="relative w-12 h-12">
                  <Image
                      src="/icon/Vector.svg"
                      alt="You save"
                      fill
                      className="object-contain"
                  />
                </div>
                <h3 className="font-['Sofia_Pro'] text-[18px] text-[#01005B]">{youSave || 'You save.'}</h3>
                <p className="font-['Sofia_Pro'] font-normal text-[15px] leading-[23px] tracking-[0.03em] text-[#676869] text-center max-w-[260px]">
                  {browseOur || 'Browse our comfort sets and save 15% when you bundle.'}
                </p>
              </div>

              <div className="bg-[#F9F0E6] rounded-[8px] w-full max-w-[346px] h-[321px] p-8 flex flex-col items-center justify-center space-y-4">
                <div className="relative w-12 h-12">
                  <Image
                      src="/icon/Group 4402.svg"
                      alt="We ship"
                      fill
                      className="object-contain"
                  />
                </div>
                <h3 className="font-['Sofia_Pro'] text-[18px] text-[#01005B]">{weShip || 'We ship.'}</h3>
                <p className="font-['Sofia_Pro'] font-normal text-[15px] leading-[23px] tracking-[0.03em] text-[#676869] text-center max-w-[260px]">
                  {weShipYour || 'We ship your items within 1-2 days of receiving your order.'}
                </p>
              </div>

              <div className="bg-[#F0EEEF] rounded-[8px] w-full max-w-[346px] h-[321px] p-8 flex flex-col items-center justify-center space-y-4">
                <div className="relative w-12 h-12">
                  <Image
                      src="/icon/day-night-sun-moon.svg"
                      alt="You enjoy"
                      fill
                      className="object-contain"
                  />
                </div>
                <h3 className="font-['Sofia_Pro'] text-[18px] text-[#01005B]">{youEnjoy || 'You enjoy!'}</h3>
                <p className="font-['Sofia_Pro'] font-normal text-[15px] leading-[23px] tracking-[0.03em] text-[#676869] text-center max-w-[260px]">
                  {wearHernest || 'Wear loungewear around the house, out on the town, or in bed.'}
                </p>
              </div>
            </div>

            <div className="pt-6 flex flex-col items-center">
              <Button className="bg-[#01005B] hover:bg-blue-800 text-white px-8">
                {customizeYourOutfit || 'Customize Your Outfit'}
              </Button>
              <div className="flex items-center justify-center gap-1 mt-3">
                {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-sm">
                  ★
                </span>
                ))}
                <span className="text-xs text-gray-600 ml-2">Over 500+ 5 Star Reviews Online</span>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}