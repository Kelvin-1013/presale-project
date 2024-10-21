'use client'

import React from 'react'
import Image from 'next/image'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { X } from 'lucide-react'

const marketList = [
  {
    logo: '/favicon/android-chrome-192x192.png',
    name: 'presale started',
    price: 0.0025,
    status: 'up',
    percent: 8,
  },
  {
    logo: '/favicon/android-chrome-192x192.png',
    name: 'ticket saling coming',
    price: 1,
    status: 'up',
    percent: 3,
  },
]

export default function MarketPrice({ onClose }: { onClose: () => void }) {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      mode: "free-snap",
      slides: {
        perView: 1,
        spacing: 15,
      },
      breakpoints: {
        '(max-width: 1024px)': {
          slides: { perView: 1, spacing: 10 },
        },
        '(max-width: 768px)': {
          slides: { perView: 1, spacing: 10 },
        },
        '(max-width: 640px)': {
          slides: { perView: 1, spacing: 10 },
        },
      },
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  )

  const renderPercent = (status, percent) => {
    switch (status) {
      case 'down':
        return (
          <span className="text-red-500">
            <span className="mr-1">▼</span>
            {percent}%
          </span>
        );
      case 'up':
        return (
          <span className="text-green-500">
            <span className="mr-1">▲</span>
            {percent}%
          </span>
        );
      default:
        return (
          <span className="text-gray-500">
            <span className="mr-1">-</span>
            {percent}%
          </span>
        );
    }
  };

  return (
    <div className="py-2 bg-black bg-opacity-50 relative">
      <button
        onClick={onClose}
        className="absolute right-2 top-2 text-white hover:text-gray-300 transition-colors duration-200 z-10"
        aria-label="Close market price"
      >
        <X size={20} />
      </button>
      <div ref={sliderRef} className="keen-slider">
        {marketList.map((item, index) => (
          <div key={index} className="keen-slider__slide">
            <div className="flex items-center justify-center space-x-2 text-white">
              <div className="relative w-6 h-6">
                <Image
                  src={item.logo}
                  alt={item.name}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <span>{item.name}</span>
              <span>${item.price.toFixed(3)}</span>
              {renderPercent(item.status, item.percent)}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}