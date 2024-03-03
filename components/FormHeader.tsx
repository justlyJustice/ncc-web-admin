import Image from "next/image";

interface Props {
  title: string;
  description: string;
}

const FormHeader = ({ title, description }: Props) => {
  return (
    <>
      <Image
        alt="logo"
        className="logo"
        height={100}
        src="/assets/logo.png"
        width={100}
        quality={100}
        priority
      />

      <div className="text-contain">
        <h2>{title}</h2>

        <p>
          {description}{" "}
          {/* <span>
            {page === "/" ? (
              <Link href="/sign-up">Sign Up</Link>
            ) : (
              <Link href="/">Sign In</Link>
            )}
          </span> */}
        </p>
      </div>

      {/* <div className="seperator">
        <hr />
        <span>or</span>
        <hr />
      </div> */}
    </>
  );
};

export default FormHeader;
