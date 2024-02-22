"use client"

import { useTheme } from "next-themes";

export const Footer = () => {
  const { theme } = useTheme();
  return (
    <div className="relative mt-10">
            <div className="flex flex-col w-full">
              {Array.from({ length: 22 }).map((_, i) => (
                <div
                  key={`${i}-stylebox`}
                  style={{
                    height: `${i}px`,
                    marginBottom: i < 24 ? `${20 - i}px` : '0',
                    backgroundColor: theme === 'light' ? 'black' : 'white',
                  }}
                  className="flex w-full"
                >
                  &nbsp;
                </div>
              ))}
            </div>

            <div className="absolute bottom-0 left-0 right-0 text-gray-500">
                <div className="flex flex-row justify-center py-2">
                <p>&copy; {new Date().getFullYear()}&nbsp;|&nbsp;</p>
                <a className="text-blue-500" href="/contact">Contact</a>
                </div>
            </div>
        </div>
  )
}