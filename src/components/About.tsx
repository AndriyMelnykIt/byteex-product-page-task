import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { Asset } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";

interface BestSelfSectionProps {
  beYourBestSelf?: string;
  aboutImg?: Asset;
  aboutDescription?: Document;
  customizeYourOutfit?: string;
}

export function BestSelfSection({beYourBestSelf, aboutImg, aboutDescription, customizeYourOutfit,}: BestSelfSectionProps) {
  let imageUrl = "https://placehold.co/600x800/f5f5f5/333333?text=About";

  if (aboutImg?.fields?.file?.url) {
    const url = String(aboutImg.fields.file.url);
    imageUrl = url.startsWith("//") ? `https:${url}` : url;
  }

  const title = beYourBestSelf || "Be your best self.";
  const buttonText = customizeYourOutfit || "Customize Your Outfit";

  return (
      <section className="py-16 md:py-20 bg-[#F0EEEF]">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="relative h-[400px] lg:h-[600px] w-full flex justify-center">
              <div className="relative w-full h-full">
                <Image
                    src={imageUrl}
                    alt={String(aboutImg?.fields?.title || "About image")}
                    fill
                    className="object-contain"
                    unoptimized
                />
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="font-['Sofia_Pro'] font-normal text-[32px] leading-[40px] tracking-[0.04em] text-[#2A2996]">
                {title}
              </h2>

              <div className="space-y-4 font-['Sofia_Pro'] font-normal text-[15px] leading-[23px] tracking-[0.03em] text-[#6C6C6C]">
                {aboutDescription ? (
                    documentToReactComponents(aboutDescription)
                ) : (
                    <>
                      <p>
                        Hi! My name's [Insert Name], and I founded [Insert] in ____.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                        lobortis sapien facilisis tincidunt pellentesque. In eget ipsum
                        et felis finibus consequat.
                      </p>
                      <p>
                        Fusce non nibh luctus, dignissim risus quis, bibendum dolor.
                        Donec placerat volutpat ligula, ac consectetur felis varius
                        non. Aliquam a nunc rutrum, porttitor dolor eu, pellentesque
                        est. Vivamus id arcu congue, faucibus libero nec, placerat
                        ligula.
                      </p>
                      <p>
                        Orci varius natoque penatibus et magnis dis parturient montes,
                        nascetur ridiculus mus. Sed eu nisl a metus ultrices sodales.
                      </p>
                      <p>
                        Fusce non ante velit. Sed auctor odio eu semper molestie. Nam
                        mattis, sapien eget lobortis fringilla, eros ipsum tristique
                        tellus, ac convallis urna massa at nibh.
                      </p>
                      <p>
                        Duis non fermentum augue. Vivamus laoreet aliquam risus, sed
                        euismod leo aliquam ut. Vivamus in felis eu lacus feugiat
                        aliquam nec in sapien.
                      </p>
                      <p>Cras mattis varius mollis.</p>
                    </>
                )}
              </div>

              <Button className="bg-[#01005B] hover:bg-blue-800 text-white px-8">
                {buttonText}
              </Button>
            </div>
          </div>
        </div>
      </section>
  );
}
