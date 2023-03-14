"use client";
// import nameSvg from '../../public/Vector.svg'
import { useEffect, useState } from "react";

export default function Hero() {
  useEffect(() => {
    const path = document.querySelector<SVGElement>(".svgPath")!;
    // const container = document.querySelector<HTMLElement>(".svg_container")!;

    /* @ts-ignore*/
    const pathLength = path.getTotalLength();

    path.style.strokeDasharray = `${pathLength} ${pathLength}`;
    path.style.strokeDashoffset = pathLength;

    const handleScroll = () => {
      // what % down it is
      const scrollPercentage =
        (document.documentElement.scrollTop + document.body.scrollTop) /
        (document.documentElement.scrollHeight -
          document.documentElement.clientHeight);
      // length to offset the dashes
      const drawLength = pathLength * scrollPercentage;
      // draw in reverse
      path.style.strokeDashoffset = `${pathLength - drawLength}`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => setIsLoading(false), 100);
  // }, []);
  // if (isLoading) return <p>Loading</p>;

  return (
    <div className="flex min-h-[400vh]">
      <div className="svg_container  sticky top-[30vh] left-0 h-full w-full overflow-hidden ">
        <svg
          className="stroke-accent stroke-2"
          viewBox="0 0 393 87"
          fill="none"
          preserveAspectRatio="xMidYMax meet"
          strokeDashoffset={993.856}
          strokeDasharray={993.856}
        >
          <path
            className="svgPath"
            d="M0 56C34.3333 56 68.6667 56 103 56C103.736 56 105.252 56.2966 105.889 56C107.009 55.4785 106.938 53.9095 107.167 53C107.823 50.3866 108.358 47.1354 110.5 45.1667C114.158 41.8037 121.121 40.2178 125.333 38.8889C135.395 35.715 139.157 34.9382 148.889 30.8889C157.522 27.2966 165.25 22.5597 172.111 16.2222C174.365 14.1405 179.662 9.60184 179.944 6.11112C180.535 -1.1891 161.42 4.32364 160.111 4.83335C148.948 9.18162 131.9 21.9296 143.611 34.2222C146.8 37.5697 149.455 38.3555 151.278 42.9445C153.564 48.6992 152.866 54.1494 151.083 60C147.34 72.2836 138.107 83.5847 124.722 85.25C121.521 85.6484 113.759 82.9555 116.139 80.7778C117.488 79.5438 122.283 78.3822 123.167 78.1389C133.512 75.2901 141.143 72.0755 149.5 64.7222C164.188 51.7991 175.839 35.7338 187.944 20.5C194.342 12.4494 187.698 24.7398 187.111 25.9445C182.615 35.1646 177.585 44.1351 173.389 53.5C171.665 57.3481 171.457 58.1179 170.167 61.7222C170.037 62.0835 170.049 63.0769 169.778 62.8056C169.468 62.4953 169.815 61.9191 169.944 61.5C170.336 60.2349 170.713 58.948 171.333 57.7778C174.926 50.9965 181.846 45.8115 189.583 44.9167C195.599 44.221 196.318 49.3552 195.639 54.1111C195.355 56.0986 193.422 60.1637 195.75 62.1667C199.932 65.7651 209.999 65.3645 213.917 65.2222C222.764 64.9009 230.642 63.9123 238.667 60.0833C239.871 59.5089 247.124 55.6645 246 51.9167C244.913 48.293 237.142 50.9333 236.556 51.1389C230.654 53.2067 227.03 55.9654 223.333 60.9722C222.187 62.5243 218.735 67.8946 220.417 70.7778C222.05 73.5776 228.443 71.5526 229.611 71.2778C240.954 68.6088 251.11 63.1128 257.833 53.3889C266.292 41.1547 270.571 26.1569 275.444 12.2778C275.929 10.8984 276.401 9.51237 276.972 8.16668C277.236 7.54497 277.38 6.01833 277.944 6.3889C278.603 6.82098 277.977 7.97104 277.861 8.75001C277.494 11.2182 277.014 13.6693 276.5 16.1111C272.837 33.5237 268.434 50.8305 263 67.7778C262.022 70.8287 260.606 73.7383 259.778 76.8333C259.162 79.1344 262.091 72.6643 263.389 70.6667C267.261 64.706 271.478 58.6818 276.5 53.6111C277.277 52.8266 289.219 41.0463 292.472 44.9167C294.826 47.7173 291.143 52.1804 289.667 55.5278C288.026 59.2485 285.374 64.3989 283.778 68.3611C282.635 71.1982 282.177 72.2393 285.167 71.3611C320.079 61.1072 356.611 54.0216 393 52"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}
