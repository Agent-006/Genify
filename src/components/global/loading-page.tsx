import React from "react";
import { Loader2 } from "lucide-react";

const LoadingPage = () => {
    return (
        <div className="h-full w-full flex items-center justify-center">
            <Loader2 className="animate-spin" />
        </div>
    );
};

export default LoadingPage;
