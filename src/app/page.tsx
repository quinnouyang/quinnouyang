import Image from "next/image";
import catPic from "../../public/cat.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h3>Hi! I&apos;ll finish this site soon. 🚧</h3>
      <text>
        In the meantime, enjoy this unresponsive picture of my sister&apos;s
        cat:
      </text>
      <br />
      <Image src={catPic} width={400} height={300} alt="My sister's cat" />
      <br />
      (Or look at my{" "}
      <Link
        href="https://github.com/quinnouyang"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </Link>{" "}
      and{" "}
      <Link
        href="https://www.linkedin.com/in/quinn-ouyang/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Linkedin
      </Link>
      , if you&apos;re into that kind of stuff.)
      <br />
      <blockquote>– Quinn</blockquote>
    </>
  );
}
