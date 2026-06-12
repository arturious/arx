import { useState } from 'react'
import DecryptedText from './DecryptedText'

export const SecretCat = () => {
  const [isHovered, setIsHovered] = useState(false)
  const catArt = ` /\\_/\\\n( o.o )\n > ^ <`

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="inline-block cursor-help select-none"
    >
      <DecryptedText
        text={isHovered ? catArt : '[meow]'}
        animateOn="hover"
        revealDirection="center"
        sequential={true}
        speed={40}
        className="font-mono text-[16px] text-[#888888] bg-black rounded-md uppercase tracking-[0.08em]"
        encryptedClassName="font-mono text-[16px] text-[#888888] bg-black rounded-md uppercase tracking-[0.08em]"
        parentClassName="inline-block select-none"
      />
    </div>
  )
}
