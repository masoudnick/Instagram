import "./style.scss";

const Alert = ({ message }) => {
  return (
    <div className="fixed bottom-0 left-0 overflow-hidden z-50">
      <div className="">
        <div className="flex px-3 min-h-11 rounded-t-sm bg-neutral-800">
          <p className="py-3 text-sm">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default Alert;
