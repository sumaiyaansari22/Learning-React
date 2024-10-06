import { useEffect, useState } from "react";
import { MIN, MAX } from "../constants";

const ProgressBar = ({value = 0 , onComplete = () => {}}) => {
    const [percent, setPercent] = useState(value);

    useEffect(() => {
        setPercent(Math.min(MAX , Math.max(value, MIN)));
        if (value >= MAX) {
            onComplete();
          }
    },[value])

    return (
        <div className="progress">
            <span style={{ color: percent > 49 ? "white" : "black"}}>{percent.toFixed()}%</span>
            <div style={{ transform: `scale(${percent / MAX})`,
                          transformOrigin: "left"    
        }}
                 role="progressbar"
                 aria-valuemin={0}
                 aria-valuemax={100}
                 aria-valuenow={percent.toFixed()}
            />
        </div>
    )
}

export default ProgressBar;