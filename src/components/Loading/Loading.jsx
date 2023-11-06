import { PropagateLoader } from "react-spinners";

const Loading = () => {
    return (
        <div className="min-h-[40vh] w-full flex items-center justify-center">
            <PropagateLoader color="#CF262E" />
        </div>
    );
};

export default Loading;