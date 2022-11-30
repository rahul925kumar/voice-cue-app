import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer-section">
      <p>Made with ❤️ by<span><Link href='https://github.com/rahul925kumar'>Rahul Kumar</Link></span> </p>
      <p>Powered by <span><Link href='https://github.com/rahul925kumar'>NextJs</Link></span>,<span><Link href='https://github.com/rahul925kumar'>Deepgram</Link></span>
      </p>
    </div>
  );
}
export default Footer;