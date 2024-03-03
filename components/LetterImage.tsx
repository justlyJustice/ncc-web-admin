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
          border-radius: 30px;
          height: 30px;
          justify-content: center;
          margin: 0px 5px;
          width: 30px;
        }

        span {
          color: var(--white);
          font-family: "Inter";
          font-size: 14px;
          font-weight: 500;
        }
      `}</style>

      <div className="flex contain" {...otherProps}>
        <span>{firstLetter}</span>
      </div>
    </>
  );
}

export default LetterImage;
