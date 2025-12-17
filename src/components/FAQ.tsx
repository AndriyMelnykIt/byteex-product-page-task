"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import Image from "next/image"
import { Asset } from "contentful"
import { Button } from "@/components/ui/Button"

interface FAQSectionProps {
  title?: string;
  media?: Asset;
}

export function FAQSection({ title, media }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number>(0)

  const faqs = [
    {
      question: "lorem ipsum dolor sit amet?",
      answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum ut felis finibus consequat.",
    },
    {
      question: "lorem ipsum dolor sit amet?",
      answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque.",
    },
    {
      question: "lorem ipsum dolor sit amet?",
      answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque.",
    },
    {
      question: "lorem ipsum dolor sit amet?",
      answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque.",
    },
    {
      question: "lorem ipsum dolor sit amet?",
      answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque.",
    },
    {
      question: "lorem ipsum dolor sit amet?",
      answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque.",
    },
  ]

  let imageUrl = '';
  if (media?.fields?.file?.url) {
    const url = String(media.fields.file.url);
    imageUrl = url.startsWith('//') ? `https:${url}` : url;
  }

  return (
      <section className="pt-4 md:pt-8 lg:pt-12 pb-12 md:pb-16 lg:pb-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:gap-12 lg:grid-cols-2 items-start">
            <div className="space-y-4 md:space-y-6">
              <div>
                <h2 className="font-['Sofia_Pro'] font-normal text-[24px] md:text-[28px] lg:text-[32px] leading-[32px] md:leading-[36px] lg:leading-[40px] tracking-[0.04em] text-[#01005B] mb-6 md:mb-[60px] text-center">
                  {title || 'Frequently asked questions.'}
                </h2>
              </div>

              <div className="space-y-3">
                {faqs.map((faq, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                      <button
                          onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                          className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-medium text-gray-900 text-sm">{faq.question}</span>
                        {openIndex === index ? (
                            <Minus className="h-5 w-5 shrink-0 text-gray-600" />
                        ) : (
                            <Plus className="h-5 w-5 shrink-0 text-gray-600" />
                        )}
                      </button>
                      {openIndex === index && (
                          <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">{faq.answer}</div>
                      )}
                    </div>
                ))}
              </div>

              <div className="pt-8 flex flex-col items-center md:hidden">
                <Button className="bg-[#01005B] hover:bg-blue-800 text-white px-8">
                  Customize Your Outfit →
                </Button>
                <div className="flex items-center justify-center gap-1 mt-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-sm">★</span>
                  ))}
                  <span className="text-xs text-gray-600 ml-2">Over 500+ 5 Star Reviews Online</span>
                </div>
              </div>
            </div>

            <div className="hidden md:block relative h-[300px] md:h-[400px] lg:h-[750px] w-full order-1 lg:order-2">
              {imageUrl ? (
                  <div className="relative w-full h-full">
                    <Image
                        src={imageUrl}
                        alt={String(media?.fields?.title || 'FAQ section image')}
                        fill
                        className="object-contain rounded-lg"
                        unoptimized
                    />
                  </div>
              ) : (
                  <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center text-gray-400">
                    <p>No image available</p>
                  </div>
              )}
            </div>
          </div>
        </div>
      </section>
  )
}