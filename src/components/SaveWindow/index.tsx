import style from "./_saveWindow.module.scss";

const windowSave: React.FC<{
  typeWindow: string;
  text: string;
}> = ({ typeWindow, text }) => {
  return (
    <div
      className={`${style.window__save} ${
        style[`window__save--${typeWindow}`]
      }`}
      role="alert"
    >
      <h3>{text}</h3>
    </div>
  );
};

export default windowSave;
