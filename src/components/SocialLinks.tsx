import { FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-5">
      <a
        href="https://linkedin.com/in/ankurchopra82"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#666] hover:text-white transition-fast"
        aria-label="LinkedIn"
      >
        <FaLinkedin size={18} />
      </a>
      <a
        href="https://x.com/ankurchopra82"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#666] hover:text-white transition-fast"
        aria-label="X Twitter"
      >
        <FaXTwitter size={18} />
      </a>
    </div>
  );
}
