import getRandomColor from "@/utils/helpers";

interface Params {
  name: string;
}

function LetterImage({ name, ...otherProps }: Params) {
  if (!name) return null;

  const firstLetter = name.charAt(0).toUpperCase();

  return (
    <>
      <style jsx>{`
        .contain {
          align-items: center;
          background-color: ${getRandomColor(name)};
          border-radius: 50px;
          height: 35px;
          justify-content: center;
          margin: 0px 5px;
          width: 35px;
        }

        span {
          color: var(--white);
          font-family: "Inter";
          font-size: 14px;
          font-weight: 500;
        }
      `}</style>

      <p className="flex contain" {...otherProps}>
        <span>{firstLetter}</span>
      </p>
    </>
  );
}

export default LetterImage;
